import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../../../shared/classes/models';
import { BlogService } from '../../blog/services/blog.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertBlogPostsResolverService implements Resolve<BlogPost[]> {

  constructor(public blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost[]> {
    const id = route.paramMap.get('id');
    if (id != null)
      return this.blogService.listBlogPosts()
        .pipe(map(list => list.filter(article => article.expertId && article.expertId === id)))
    else
      return this.blogService.listBlogPosts();
  }
}
