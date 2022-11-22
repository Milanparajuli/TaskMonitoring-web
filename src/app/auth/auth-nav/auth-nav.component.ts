import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit {
  menus=[
    {
      name:'sign up',
      link:'/register'
    },
    {
      name:'login',
      link:'/login'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
