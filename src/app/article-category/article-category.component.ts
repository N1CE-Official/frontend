import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.css']
})
export class ArticleCategoryComponent implements OnInit {
  @Input() category: Category;
  divSize = 'col-lg-3';

  constructor() {
    this.category = {};
  }

  ngOnInit(): void {
    if(this.category && this.category.articlesPerRow === 3) {
      this.divSize = 'col-lg-4';
    }
  }
}
