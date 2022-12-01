import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  username: any;
  taskDetail: Array<any> = new Array<any>();
  toggleArray: { toggled: boolean }[] = [];
  // email: any;
  // fullName: any;
  task: any;
  tasks = [
    {
      name: 'hello hi',
      status: 'Todo',
    },
    {
      name: 'hello hidncvjke',
      status: 'Doing',
    },
    {
      name: 'hello hidnvjn',
      status: 'Done',
    },
    {
      name: 'hello hiqncj ',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
    {
      name: 'hello hiccjw dklkvm',
      status: 'Todo',
    },
  ];

  constructor(
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listUser();
  }
  // add(){}
  public listUser() {
    this.taskService.listAllTask(this.task).subscribe(
      (response: any) => {
        this.taskDetail = response?.task;
        console.log(response);
      },
      (error: any) => {}
    );
  }

  editBtn(id: number) {
    this.router.navigate(['home/edit-task/',id]);
  }

  deleteBtn(id:any){
    if(confirm("Are you Sure want to delete ?")){
      this.taskService.deleteTaskById(id).subscribe((response:any)=>{
        this.router.navigate(['/home/']);
        // location.reload();
        // console.log("hello");
      },
      (error:any)=>{
        console.error(error);
      })
    }
    // this.taskService.deleteTaskById(id).subscribe((response:any)=>{
    //   // console.log("hello");
    // },
    // (error:any)=>{
    //   console.error(error);
    // })
  }
}
