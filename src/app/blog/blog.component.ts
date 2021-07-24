import { Component, OnInit } from '@angular/core';
import { Category } from '../models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  categories: Category [] = [{
    title: 'Blockchain', articles: [{
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }]
  }, {
    title: 'DeFi', articles: [{
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }]
  }];
  inEvidenceCategory: Category = {
    title: 'Trending', articles: [{
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }, {
      title: '',
      content: ''
    }], articlesPerRow: 3
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
