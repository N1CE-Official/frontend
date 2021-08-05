import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../shared/models';

@Component({
  selector: 'app-author-badge-in-evidence',
  templateUrl: './author-badge-in-evidence.component.html',
  styleUrls: ['./author-badge-in-evidence.component.css']
})
export class AuthorBadgeInEvidenceComponent implements OnInit {
  @Input() expert!: Expert;

  constructor() { }

  ngOnInit(): void {
  }

}
