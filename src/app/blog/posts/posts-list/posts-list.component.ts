import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsService } from '../posts.service';
import { PostId } from '../post.model';

@Component({
  selector: 'pb-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<PostId[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<PostId[]> {
    return this.postsService.getPostsList();
  }

}
