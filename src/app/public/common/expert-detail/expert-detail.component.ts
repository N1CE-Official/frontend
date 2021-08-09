import { Component, Input, OnInit } from '@angular/core';
import { BlogPost, Expert, Service } from '../../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/service/blog.service';
import { map } from 'rxjs/operators';
import { PlatformService } from '../../../shared/service/platform.service';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {
  @Input() expert!: Expert;
  articles!: BlogPost[];
  services!: Service[];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private platformService: PlatformService
  ) {
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
            .subscribe(list => this.articles = list);
          this.platformService.listServices()
            .pipe(map(list => list.filter(service => service.expertId && service.expertId === expert.id)))
            .subscribe(list => this.services = list);
        });
  }

}
