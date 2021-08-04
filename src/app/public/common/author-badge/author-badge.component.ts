import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../shared/models';

@Component({
  selector: 'app-author-badge',
  templateUrl: './author-badge.component.html',
  styleUrls: ['./author-badge.component.css']
})
export class AuthorBadgeComponent implements OnInit {
  @Input() expert!: Expert;

  constructor() { }

  ngOnInit(): void {
  }

}
