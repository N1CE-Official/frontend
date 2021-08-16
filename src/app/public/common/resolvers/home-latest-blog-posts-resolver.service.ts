import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../../blog/services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class HomeLatestBlogPostsResolverService implements Resolve<string[]> {

  constructor(public blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
      return this.blogService.listLatestBlogPosts()
  }
}
