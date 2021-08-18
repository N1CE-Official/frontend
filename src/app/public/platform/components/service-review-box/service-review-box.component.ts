import { Component, Input, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { Observable } from 'rxjs';
import { ServiceReview } from '../../../../shared/classes/models';

@Component({
  selector: 'app-service-review-box',
  templateUrl: './service-review-box.component.html',
  styleUrls: ['./service-review-box.component.css']
})
export class ServiceReviewBoxComponent implements OnInit {
  @Input() serviceId!: string;
  reviews$!: Observable<ServiceReview[]>;

  constructor(
    public platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.reviews$ = this.platformService.listReviews(this.serviceId);
  }

}
