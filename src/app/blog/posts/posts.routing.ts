import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from '../blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: BlogComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PostsListComponent },
      { path: 'create', component: AddPostComponent },
      { path: 'edit/:id', component: AddPostComponent },
      { path: ':id', component: PostDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
