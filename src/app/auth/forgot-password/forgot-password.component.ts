import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswords: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.forgotpasswords.controls;
  }

  forgotpassword(newpassword:any){
    
    }

    back(){
      this.location.back();
    }
}
