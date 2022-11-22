import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForms: FormGroup=new FormGroup({})
  name = new FormControl('');

  constructor() { 
  }

  ngOnInit(): void {
    this.loginFormByAuth();
  }

  loginFormByAuth(){

  }

}
