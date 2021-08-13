import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../../../shared/classes/models';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDetailResolverService implements Resolve<BlogPost> {

  constructor(public blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost> {
    const id = route.paramMap.get('id');
    if (id != null)
      return this.blogService.getPost(id);
    else
      return this.blogService.getPost('404');
  }
}
