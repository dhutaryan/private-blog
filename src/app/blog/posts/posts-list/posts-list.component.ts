import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsService } from '../posts.service';
import { PostId } from '../post.model';
import { SpinnerService } from '../../../shared/spinner/spinner.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pb-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<PostId[]>;

  constructor(private postsService: PostsService, private spinner: SpinnerService) { }

  ngOnInit() {
    this.spinner.enable();
    this.posts$ = this.getPosts()
      .pipe(
        tap(() => this.spinner.disable()),
      );
  }

  getPosts(): Observable<PostId[]> {
    return this.postsService.getPostsList();
  }

}
