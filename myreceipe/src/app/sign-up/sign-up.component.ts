import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  model: any = {};
  constructor() { }
  
  ngOnInit(): void {
  }
  togglePassword(){
    var password=(<HTMLInputElement>document.getElementById("passWord"));
    var maticon=(<HTMLInputElement>document.getElementById("matIcon2"));
    if(password.type=="password")
    {
      password.type="text";
      maticon.innerHTML="visibility";
    }
    else
    {
      password.type="password";
      maticon.innerHTML="visibility_off";
    }
  }
  toggleConfirmPassword()
  {
    var confirmpassWord=(<HTMLInputElement>document.getElementById("confirmpassWord"));
    var maticon=(<HTMLInputElement>document.getElementById("matIcon"));
    if(confirmpassWord.type=="password")
    {
      confirmpassWord.type="text";
      maticon.innerHTML="visibility";
    }
    else
    {
      confirmpassWord.type="password";
      maticon.innerHTML="visibility_off";
    }
  }
}
