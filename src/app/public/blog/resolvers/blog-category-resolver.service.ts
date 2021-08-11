import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { BlogCategory } from '../../../shared/classes/models';

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryResolverService implements Resolve<BlogCategory[]> {

  constructor(public blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogCategory[]> {
    return this.blogService.listCategories();
  }
}
