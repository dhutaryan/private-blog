import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PostCardComponent } from './post-card/post-card.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { DateFormatPipe } from './post-card/date-format.pipe';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PostsListComponent,
    PostCardComponent,
    DateFormatPipe,
    AddPostComponent,
    PostDetailsComponent,
  ],
})
export class PostsModule { }
