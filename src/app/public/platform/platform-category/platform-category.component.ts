import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Service, ServiceCategory } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-platform-category',
  templateUrl: './platform-category.component.html',
  styleUrls: ['./platform-category.component.css']
})
export class PlatformCategoryComponent implements OnInit, OnChanges {
  @Input() category!: ServiceCategory;
  services!: Service[];

  constructor(
    public blogService: BlogService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category && this.category.services) {
      this.blogService.listBlogPosts()
        .pipe(map(list => list.filter(service => service.id && this.category.services && this.category.services.includes(service.id))))
        .subscribe(list => {
          this.services = list.slice(0);
        });

    }
  }
}
