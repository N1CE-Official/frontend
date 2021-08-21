import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpertService } from '../services/expert.service';

@Injectable({
  providedIn: 'root'
})
export class ExpertCandidatesResolverService implements Resolve<string[]> {

  constructor(public expertService: ExpertService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
      return this.expertService.latestExpertCandidates()
  }
}
