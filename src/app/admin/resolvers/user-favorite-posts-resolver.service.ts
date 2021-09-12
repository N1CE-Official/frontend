import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFavoritesService } from '../services/user-favorites.service';
import { UserFavoritePost } from '../../shared/classes/models';

@Injectable({
  providedIn: 'root'
})
export class UserFavoritePostsResolverService implements Resolve<UserFavoritePost[]> {

  constructor(public userFavoritesService: UserFavoritesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserFavoritePost[]> {
    const userId = route.data['userId'];
    if (userId != null) {
      return this.userFavoritesService.getFavoritePosts(userId);
    }
    return this.userFavoritesService.getFavoritePosts('404');
  }
}
