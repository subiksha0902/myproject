import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  togglePassword(){
    var password=(<HTMLInputElement>document.getElementById("passWord"));
    if(password.type=="password")
    {
      password.type="text";
    }
    else
    {
      password.type="password";
    }
  }
}
