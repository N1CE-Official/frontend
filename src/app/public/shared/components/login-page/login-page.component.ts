import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  emailAddress!: string;
  password!: string;
  emailAddressForgot!: string;
  modalRef!: NgbActiveModal;

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
  }

  public login() {
    if (this.emailAddress && this.password) {
      return true;
    }
    return false;
  }

  public forgotPassword() {
    if (this.emailAddressForgot) {
      this.modalRef.dismiss();
      return true;
    }
    return false;
  }

  openVerticallyCentered(content: any) {
    this.modalRef = this.modalService.open(content, {centered: true});
  }

}
