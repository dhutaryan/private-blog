import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

import { Post } from './post.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private db: AngularFirestore, private authService: AuthService) {}

  getPostsList(): Observable<Post[]> {
    return this.db
      .collection<Post>('posts',
        ref => ref.where('ownerId', '==', this.authService.getCurrentUser().uid)
          .orderBy('createdAt', 'desc'),
      )
      .valueChanges();
  }

  addPost({ title, description }) {
    const createdAt = new Date();
    const updatedAt = new Date();
    const ownerId = this.authService.getCurrentUser().uid;

    return this.db.collection<Post>('posts').add({
      title,
      description,
      createdAt,
      updatedAt,
      ownerId,
    });
  }
}
