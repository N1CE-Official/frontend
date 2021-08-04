import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../shared/models';

@Component({
  selector: 'app-author-box',
  templateUrl: './author-box.component.html',
  styleUrls: ['./author-box.component.css']
})
export class AuthorBoxComponent implements OnInit {
  @Input() expert!: Expert;

  constructor() { }

  ngOnInit(): void {
  }

}
