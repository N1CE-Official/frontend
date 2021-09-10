import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../auth/auth.service';
import { NavigationExtras, Router } from '@angular/router';

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
    private modalService: NgbModal,
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public login() {
    if (this.emailAddress && this.password) {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirectUrl], navigationExtras);
        }
      });
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
