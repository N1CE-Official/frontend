import { Component, OnInit } from '@angular/core';
import { ExpertPlatformService } from '../../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service$!: Observable<ExpertPlatformService>;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service$ = this.route.data.pipe(map( data => data.service));
  }

}
