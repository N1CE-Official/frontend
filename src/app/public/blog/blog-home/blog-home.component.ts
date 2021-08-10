import { Component, OnInit } from '@angular/core';
import { BlogCategory, BlogPost } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  categories$!: Observable<BlogCategory[]>;
  posts$!: Observable<BlogPost[]>;
  inEvidenceCategory!: BlogCategory;

  constructor(
    public blogService: BlogService,
    public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories$ = this.route.data.pipe(map( data => data.categories));
    this.posts$ = this.route.data.pipe(map( data => data.posts));
    this.blogService.inEvidenceCategory().subscribe(inEvidenceCategory => {
      this.inEvidenceCategory = inEvidenceCategory;
    });
  }

}
