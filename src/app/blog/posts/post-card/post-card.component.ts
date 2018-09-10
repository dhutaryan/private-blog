import { Component, OnInit, Input } from '@angular/core';
import { PostId } from '../post.model';

@Component({
  selector: 'pb-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: PostId;

  constructor() { }

  ngOnInit() {
  }

}
