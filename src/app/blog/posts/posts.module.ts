import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCardComponent } from './post-card/post-card.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { DateFormatPipe } from './post-card/date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PostsListComponent,
    PostCardComponent,
    DateFormatPipe,
  ],
})
export class PostsModule { }
