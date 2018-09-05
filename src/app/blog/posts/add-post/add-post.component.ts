import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostsService } from './../posts.service';

@Component({
  selector: 'pb-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addPost() {
    this.loading = true;
    this.postsService
      .addPost(this.addPostForm.value)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/posts']);
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
