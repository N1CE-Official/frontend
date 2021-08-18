import { Component, Input, OnInit } from '@angular/core';
import { ServiceReview, User } from '../../../../shared/classes/models';
import { UserService } from '../../../common/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-review-card',
  templateUrl: './service-review-card.component.html',
  styleUrls: ['./service-review-card.component.css']
})
export class ServiceReviewCardComponent implements OnInit {
  @Input() review!: ServiceReview;
  user$!: Observable<User>;
  numbers!: boolean[];

  constructor(
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    if (this.review) {
      this.numbers = Array(5).fill(false);
      for(let i = 0; i < Math.round(this.review.rating); i++) {
        this.numbers[i] = true;
      }
      this.user$ = this.userService.getUser(this.review.userId);
    }
  }

}
