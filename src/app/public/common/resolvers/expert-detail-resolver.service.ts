import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Expert } from '../../../shared/classes/models';
import { ExpertService } from '../services/expert.service';

@Injectable({
  providedIn: 'root'
})
export class ExpertDetailResolverService implements Resolve<Expert> {

  constructor(public expertService: ExpertService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Expert> {
    const id = route.paramMap.get('id');
    if (id != null)
      return this.expertService.getExpert(id);
    else
      return this.expertService.getExpert('404');
  }
}
