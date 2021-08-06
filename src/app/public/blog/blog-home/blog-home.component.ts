import { Component, OnInit } from '@angular/core';
import { BlogCategory } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  categories: BlogCategory [] = [];
  inEvidenceCategory!: BlogCategory;

  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.listCategories().subscribe(list => {
      this.categories = list;
    });
    this.blogService.inEvidenceCategory().subscribe(inEvidenceCategory => {
      this.inEvidenceCategory = inEvidenceCategory;
    });
  }

}
