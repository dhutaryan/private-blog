import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog.routing';
import { PostsModule } from './posts/posts.module';

import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    PostsModule,
  ],
  declarations: [
    BlogComponent,
  ],
})
export class BlogModule { }
