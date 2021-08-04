import { Component, Input, OnInit } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../../shared/models';

@Component({
  selector: 'app-article-in-evidence',
  templateUrl: './article-in-evidence.component.html',
  styleUrls: ['./article-in-evidence.component.css']
})
export class ArticleInEvidenceComponent extends ArticleCardComponent implements OnInit {
  @Input() article!: Article;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
