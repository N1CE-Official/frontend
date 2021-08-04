import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article!: Article;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null)
      this.blogService.getArticle(id)
        .subscribe(article => this.article = article);
  }

}
