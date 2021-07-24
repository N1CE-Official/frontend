import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-in-evidence',
  templateUrl: './article-in-evidence.component.html',
  styleUrls: ['./article-in-evidence.component.css']
})
export class ArticleInEvidenceComponent extends ArticleCardComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
