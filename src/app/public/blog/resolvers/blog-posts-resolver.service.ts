import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../../../shared/classes/models';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsResolverService implements Resolve<BlogPost[]> {

  constructor(public blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost[]> {
    return this.blogService.listBlogPosts();
  }
}
