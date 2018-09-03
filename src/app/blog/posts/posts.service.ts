import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private db: AngularFirestore) {}

  getPostsList(): Observable<Post[]> {
    return this.db
      .collection<Post>('posts', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges();
  }
}
