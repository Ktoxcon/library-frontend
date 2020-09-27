import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}

  hide: boolean = true;

  userInput: string = '';
  passwordInput: string = '';

  signIn(): void {
    this.auth.signIn(this.userInput, this.passwordInput);
  }
}
