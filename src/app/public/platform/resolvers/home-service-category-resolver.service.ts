import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlatformService } from '../services/platform.service';
import { map } from 'rxjs/operators';
import { ServiceCategory } from '../../../shared/classes/models';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceCategoryResolverService implements Resolve<ServiceCategory[]> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceCategory[]> {
      return this.platformService.listCategories()
  }
}
