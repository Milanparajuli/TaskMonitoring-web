import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  username:any;
  email:any;
  fullName:any;
  tasks=[
    {
      name:'hello hi',
      status:'Todo'
    },
    {
      name:'hello hidncvjke',
      status:'Doing'
    },
    {
      name:'hello hidnvjn',
      status:'Done'
    },
    {
      name:'hello hiqncj ',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    {
      name:'hello hiccjw dklkvm',
      status:'Todo'
    },
    
    
  ]
  taskDetail:any;


  constructor(
    apiService:UserService,
  ) { }

  ngOnInit(): void {
  }
add(){}
  listUser(){
    
  }

}
