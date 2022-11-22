import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menus=[
    {
      name:'Home',
      link:'/home'
    },
    {
      name: 'Logout',
      link:'/auth/login'
    }
    // {
    //   name:'Login',
    //   link:'/login'
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
