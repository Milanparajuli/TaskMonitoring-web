import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { clippingParents } from '@popperjs/core';
import { TaskServiceService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;
  id: string | undefined;
  taskDetail: Array<any> = new Array<any>();
  taskStatus:any;
  task: any;

  constructor(
    private form: FormBuilder,
    private taskService: TaskServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIdFromQuery();
    this.editTaskForm = this.form.group({
      task: [undefined, Validators.required],
      userId: [undefined, Validators.required],
      taskStatus:[undefined]
    });
    this.getTaskDetailFromId();
    // this.sendTask(this.task,this.id);
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.editTaskForm.controls;
  }

  sendTask(task: any,id:any) {
    this.submitted = true;
    console.log(task);
    if (this.editTaskForm.valid) {
      console.log("before");
      this.taskService.editTask(task,id).subscribe(
        
        (response: any) => {
          // console.log("uvfe")
          // console.log('response',response)
          // this.id = response.id;
          task = response.task;
          this.taskDetail = response?.task;
          // this.taskStatus = response?.taskStatus;
          // console.log('task jnbvjk: ',this.taskDetail)
          this.isSubmitting = true;
          console.log('Task Edited sucessfully');
        },
        (error: any) => {
          console.error(error);
          this.isSubmitting = false;
        }
      );
    } else {
      console.log('Error on Editing task');
    }
  }

  getTaskDetailFromId() {
    this.taskService.listTaskById(this.id).subscribe(
      (response: any) => {
        this.setTaskDetail(response);
        console.log('resp: ', response);
        // this.setTaskDetail =this.setTaskDetail;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  setTaskDetail(task: any) {
    this.editTaskForm.patchValue({
      task: task.task,
      userId: task.userId,
      status:task.taskStatus,
    });
  }

  getIdFromQuery() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  // onEditTask(taskDetail:any){
  //   this.taskService.editTask(taskDetail,this.id).subscribe((response:any)=>{
  //     console.log('Edit sucess')
  //   })
  // }
}
