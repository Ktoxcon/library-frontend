import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hide: boolean = true;
  user: string = '';
  password: string = '';
  userInput: boolean = false;
  passwordInput: boolean = false;

  handleUserChange(userName: string): void {
    if (userName !== '') {
      this.userInput = true;
    }
  }

  handlePasswordChange(password: string): void {
    if (password !== '') {
      this.passwordInput = true;
    }
  }
}
