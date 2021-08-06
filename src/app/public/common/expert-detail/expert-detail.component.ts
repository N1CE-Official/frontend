import { Component, Input, OnInit } from '@angular/core';
import { BlogPost, Expert } from '../../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/service/blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {
  @Input() expert!: Expert;
  articles!: BlogPost[];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.getExpert();
  }

  getExpert(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null)
      this.blogService.getExpert(id)
        .subscribe(expert => {
          this.expert = expert;
          this.blogService.listBlogPosts()
            .pipe(map(list => list.filter(article => article.expertId && article.expertId === expert.id)))
            .subscribe(list => this.articles = list)
        });
  }

}
