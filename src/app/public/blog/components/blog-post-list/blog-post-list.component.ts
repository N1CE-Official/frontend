import { Component, Input, OnInit } from '@angular/core';
import { BlogPost} from '../../../../shared/classes/models';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  @Input() blogPosts!: BlogPost[];
  @Input() postsPerRow?: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }
}
