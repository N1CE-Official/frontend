import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlatformService } from '../../platform/services/platform.service';

@Injectable({
  providedIn: 'root'
})
export class HomeTopServicesResolverService implements Resolve<string[]> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
      return this.platformService.listTopServices()
  }
}
