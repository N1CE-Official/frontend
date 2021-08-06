import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogPost, BlogCategory } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit, OnChanges {
  @Input() category!: BlogCategory;
  articles!: BlogPost[];

  constructor(
    public blogService: BlogService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.articles) {
      this.blogService.listBlogPosts()
        .pipe(map(list => list.filter(article => article.id && this.category.articles && this.category.articles.includes(article.id))))
        .subscribe(list => {

        if (this.category.articlesPerRow === 3)
          this.articles = list.slice(1);
        else
          this.articles = list.slice(0);
      });

    }
  }
}
