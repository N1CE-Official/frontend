import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogPost } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.css']
})
export class BlogPostCardComponent implements OnInit, OnChanges {
  @Input() articleId!: string;
  article!: BlogPost;

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.articleId) {
      this.blogService.getPost(this.articleId).subscribe(
        art => this.article = art
      )
    }
  }

}
