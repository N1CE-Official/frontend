import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogCategory, BlogPost } from '../../../../shared/classes/models';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit, OnChanges {
  @Input() category!: BlogCategory;
  @Input() posts!: BlogPost[] | null;
  articles!: BlogPost[];

  constructor(
    public blogService: BlogService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.articles) {
      if (this.posts) {
        const list = this.posts;

        if (this.category.articlesPerRow === 3)
          this.articles = list.slice(1);
        else
          this.articles = list.slice(0);
      }
    }
  }
}
