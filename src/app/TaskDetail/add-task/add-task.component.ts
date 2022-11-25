import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService} from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup = new FormGroup({});
  submitted: boolean|undefined;
  isSubmitting: boolean|undefined;

  constructor(
    private form:FormBuilder,
    private taskService:TaskServiceService
  ) { }

  ngOnInit(): void {
    this.addTaskForm= this.form.group({
      task:[undefined,Validators.required],
      userId:[undefined,Validators.required]
    })
  }
  get forms():{[key:string]: AbstractControl}{
    return this.addTaskForm.controls;
  }

  sendTask(task:any){
    this.submitted=true;
    console.log(task);
    if(this.addTaskForm.valid){
      this.taskService.addTask(task).subscribe(
        (response:any)=>
      {
        this.isSubmitting=false;
        console.log("Task Added sucessfully")
      },
      (error:any)=>{
        this.isSubmitting=false;
      }
      );
    }
    else{
      console.log("Error on adding task");
    }
  }
}
