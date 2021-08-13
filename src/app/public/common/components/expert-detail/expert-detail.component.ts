import { Component, OnInit } from '@angular/core';
import { BlogPost, Expert, ExpertPlatformService } from '../../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {
  expert$!: Observable<Expert>;
  posts$!: Observable<BlogPost[]>;
  services$!: Observable<ExpertPlatformService[]>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.expert$ = this.route.data.pipe(map( data => data.expert));
    this.posts$ = this.route.data.pipe(map(data => data.blogPosts));
    this.services$ = this.route.data.pipe(map( data => data.services));
  }

}
