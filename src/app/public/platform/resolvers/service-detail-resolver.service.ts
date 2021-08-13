import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpertPlatformService } from '../../../shared/classes/models';
import { PlatformService } from '../services/platform.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailResolverService implements Resolve<ExpertPlatformService> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExpertPlatformService> {
    const id = route.paramMap.get('id');
    if (id != null)
      return this.platformService.getService(id);
    else
      return this.platformService.getService('404');
  }
}
