import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.css']
})
export class BlogPostDetailComponent implements OnInit {
  blogPost$!: Observable<BlogPost>;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.blogPost$ = this.route.data.pipe(map( data => data.post));
  }

}
