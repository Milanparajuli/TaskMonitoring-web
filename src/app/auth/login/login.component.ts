import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private userService:UserService,
    private router:Router
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
          this.router.navigate(['/home']);
        },
        (error:any)=>{
          this.isSubmitting = false;
          window.location.reload();
        }
      );
    }
    else{
      console.log("Error");
    }
  }
}

