import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  loginWithEmail(){
    this.authService.emailPasswordLogin(this.email, this.password);
    this.router.navigate(['/home']);
  }

  loginWithGoogle(){
    this.authService.googleLogin();
    this.router.navigate(['/home']);
  }

}
