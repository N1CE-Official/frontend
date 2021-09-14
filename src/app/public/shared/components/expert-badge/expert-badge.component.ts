import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Expert } from '../../../../shared/classes/models';
import { ExpertService } from '../../../common/services/expert.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-badge',
  templateUrl: './expert-badge.component.html',
  styleUrls: ['./expert-badge.component.css']
})
export class ExpertBadgeComponent implements OnInit, OnChanges {
  @Input() expertId!: string;
  @Input() startingPrice: number = 80;
  public currentFavoriteIcon: IconProp = heartOutline;
  public isFavoriteIcon = faHeart;
  public notFavoriteIcon = heartOutline;

  expert!: Expert;

  constructor(
    public expertService: ExpertService,
    public authGuard: AuthGuard,
    public router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.expertId) {
      this.expertService.getExpert(this.expertId).subscribe(exp => this.expert = exp);
    }
  }

  setFavorite() {
    if (this.authGuard.checkLogin(this.router.url)) {
      this.currentFavoriteIcon = (this.currentFavoriteIcon === this.isFavoriteIcon ? this.notFavoriteIcon : this.isFavoriteIcon);
    }
  }

}
