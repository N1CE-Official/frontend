import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpertPlatformService} from '../../../shared/classes/models';
import { PlatformService } from '../../platform/services/platform.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertServiceResolverService implements Resolve<ExpertPlatformService[]> {

  constructor(public platformService: PlatformService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExpertPlatformService[]> {
    const id = route.paramMap.get('id');
    if (id != null)
      return this.platformService.listServices()
        .pipe(map(list => list.filter(service => service.expertId && service.expertId === id)));
    else return this.platformService.listServices();
  }
}
