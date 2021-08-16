import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-candidate-approval-box',
  templateUrl: './expert-candidate-approval-box.component.html',
  styleUrls: ['./expert-candidate-approval-box.component.css']
})
export class ExpertCandidateApprovalBoxComponent implements OnInit {
  @Input () votes?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
