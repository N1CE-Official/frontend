import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogCategory, BlogPost } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit, OnChanges {
  @Input() category!: BlogCategory;
  @Input() allPosts!: BlogPost[] | null;
  articles!: BlogPost[];

  constructor(
    public blogService: BlogService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.articles) {
      if (this.allPosts) {
        const list = this.allPosts.filter(article => article.id && this.category.articles && this.category.articles.includes(article.id));

        if (this.category.articlesPerRow === 3)
          this.articles = list.slice(1);
        else
          this.articles = list.slice(0);
      }
    }
  }
}
