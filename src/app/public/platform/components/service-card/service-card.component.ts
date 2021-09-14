import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Expert, ExpertPlatformService } from '../../../../shared/classes/models';
import { PlatformService } from '../../services/platform.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit, OnChanges {
  @Input() serviceId!: string;
  service!: ExpertPlatformService;
  expert!: Expert;
  public currentFavoriteIcon: IconProp = heartOutline;
  public isFavoriteIcon = faHeart;
  public notFavoriteIcon = heartOutline;

  constructor(
    public platformService: PlatformService,
    public authGuard: AuthGuard,
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.serviceId) {
      this.platformService.getService(this.serviceId).subscribe(
        serv => this.service = serv
      )
    }
  }

  setFavorite() {
    if (this.authGuard.checkLogin(this.router.url)) {
      this.currentFavoriteIcon = (this.currentFavoriteIcon === this.isFavoriteIcon ? this.notFavoriteIcon : this.isFavoriteIcon);
    }
  }

}
