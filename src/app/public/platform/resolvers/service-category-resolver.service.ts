import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlatformService } from '../services/platform.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryResolverService implements Resolve<string[]> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
      return this.platformService.listCategories().pipe(map(list => list.map(category => category.title)))
  }
}
