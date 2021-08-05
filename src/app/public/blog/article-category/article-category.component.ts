import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article, Category } from '../../../shared/models';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.css']
})
export class ArticleCategoryComponent implements OnInit, OnChanges {
  @Input() category: Category;
  articles!: Article[];

  constructor() {
    this.category = {};
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.articles) {
      if (this.category.articlesPerRow === 3)
        this.articles = this.category.articles.slice(1);
      else
        this.articles = this.category.articles.slice(0);
    }
  }
}
