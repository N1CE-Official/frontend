import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  emailAddress!: string;
  password!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public signUp() {
    if (this.emailAddress && this.password) {
      return true;
    }
    return false;
  }

}
