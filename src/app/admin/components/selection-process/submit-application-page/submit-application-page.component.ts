import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-submit-application-page',
  templateUrl: './submit-application-page.component.html',
  styleUrls: ['./submit-application-page.component.css']
})
export class SubmitApplicationPage implements OnInit {

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
