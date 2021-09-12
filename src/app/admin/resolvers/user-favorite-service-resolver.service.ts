import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFavoriteService } from '../../shared/classes/models';
import { UserFavoritesService } from '../services/user-favorites.service';

@Injectable({
  providedIn: 'root'
})
export class UserFavoriteServiceResolverService implements Resolve<UserFavoriteService[]> {

  constructor(public userFavoritesService: UserFavoritesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserFavoriteService[]> {
    const userId = route.data['userId'];
    if (userId != null) {
      return this.userFavoritesService.getFavoriteServices(userId);
    }
    return this.userFavoritesService.getFavoriteServices('404');
  }
}
