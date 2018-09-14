import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PostsService } from './../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'pb-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  loading = false;
  postId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    if (this.postId) {
      this.getPostById();
    }
  }

  getPostById() {
    this.postsService.getPost(this.postId).subscribe((post: Post) => {
      this.addPostForm.patchValue({
        title: post.title,
        description: post.description,
      });
    });
  }

  submit() {
    this.loading = true;
    this.postId
      ? this.editPost()
      : this.addPost();
  }

  addPost() {
    this.postsService.addPost(this.addPostForm.value)
      .then(() => {
        this.loading = false;
        this.router.navigate(['posts']);
      })
      .catch(() => {
        this.loading = false;
      });
  }

  editPost() {
    this.postsService.editPost(this.postId, this.addPostForm.value)
      .then(() => {
        this.loading = false;
        this.router.navigate([`/posts/${this.postId}`]);
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
