import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForms: FormGroup = new FormGroup({});

  submitted: boolean = false;
  isSubmitting:boolean|undefined;

  constructor(
    private form: FormBuilder,
    private userService:UserService
    ) {}

  ngOnInit(): void {
    // this.loginFormByAuth();
    this.loginForms = this.form.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.loginForms.controls;
  }

  loginUser(login:any){
    this.submitted=true;
    console.log(login);
    if(this.loginForms.valid){
      this.userService.login(login).subscribe(
        (response:any)=>{
          this.isSubmitting=false;
          console.log("Login Sucessfully");
        },
        (error:any)=>{
          this.isSubmitting = false;
        }
      );
    }
    else{
      console.log("Error");
    }
  }
}

