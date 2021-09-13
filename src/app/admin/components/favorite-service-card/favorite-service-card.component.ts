import { Component, OnInit } from '@angular/core';
import { ServiceCardComponent } from '../../../public/platform/components/service-card/service-card.component';
import { PlatformService } from '../../../public/platform/services/platform.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorite-service-card',
  templateUrl: './favorite-service-card.component.html',
  styleUrls: ['./favorite-service-card.component.css']
})
export class FavoriteServiceCardComponent extends ServiceCardComponent implements OnInit {
  public icon: IconProp = faHeart;
  public standard = faHeart;
  public inverted = heartOutline;

  constructor(public platformService: PlatformService) {
    super(platformService);
  }

  ngOnInit(): void {
  }

}
