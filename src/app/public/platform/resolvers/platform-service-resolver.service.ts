import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpertPlatformService } from '../../../shared/classes/models';
import { PlatformService } from '../services/platform.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformServiceResolverService implements Resolve<ExpertPlatformService[]> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExpertPlatformService[]> {
      return this.platformService.listServices();
  }
}
