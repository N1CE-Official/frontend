import { Component, OnInit } from '@angular/core';
import { BlogCategory, BlogPost } from '../../../../shared/classes/models';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  categories$!: Observable<BlogCategory[]>;
  posts$!: Observable<BlogPost[]>;
  inEvidenceCategory!: BlogCategory;
  inEvidencePost$!: Observable<BlogPost>;

  constructor(
    public blogService: BlogService,
    public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories$ = this.route.data.pipe(map( data => data.categories));
    this.posts$ = this.route.data.pipe(map( data => data.posts));
    this.inEvidencePost$ = this.route.data.pipe(map( data => data.inEvidencePost));
    this.blogService.inEvidenceCategory().subscribe(inEvidenceCategory => {
      this.inEvidenceCategory = inEvidenceCategory;
    });
  }

  getPosts(category: string): Observable<BlogPost[]> {
    return this.posts$.pipe(map(list => list.filter(post => post.id && post.category && post.category === category)));
  }

}
