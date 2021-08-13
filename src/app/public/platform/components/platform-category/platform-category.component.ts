import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ExpertPlatformService, ServiceCategory } from '../../../../shared/classes/models';
import { BlogService } from '../../../blog/services/blog.service';
import { map } from 'rxjs/operators';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-platform-category',
  templateUrl: './platform-category.component.html',
  styleUrls: ['./platform-category.component.css']
})
export class PlatformCategoryComponent implements OnInit, OnChanges {
  @Input() category!: ServiceCategory;
  services!: ExpertPlatformService[];

  constructor(
    public platformService: PlatformService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.services) {
      this.platformService.listServices()
        .pipe(map(list => list.filter(service => service.id && this.category.services && this.category.services.includes(service.id))))
        .subscribe(list => {
          this.services = list.slice(0);
        });

    }
  }
}
