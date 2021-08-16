import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-latest-blog-posts-section',
  templateUrl: './home-latest-blog-posts-section.component.html',
  styleUrls: ['./home-latest-blog-posts-section.component.css']
})
export class HomeLatestBlogPostsSectionComponent implements OnInit {
  latestBlogPosts$!: Observable<string[]>;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.latestBlogPosts$ = this.route.data.pipe(map(data => data.latestBlogPosts));
  }

}
