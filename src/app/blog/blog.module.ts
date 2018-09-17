import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsModule } from './posts/posts.module';

import { BlogComponent } from './blog.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
    RouterModule,
  ],
  declarations: [
    BlogComponent,
    NavigationMenuComponent,
  ],
})
export class BlogModule { }
