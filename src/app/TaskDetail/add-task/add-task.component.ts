import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;
  errorMessage: any;

  constructor(
    private form: FormBuilder,
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.form.group({
      task: [undefined, Validators.required],
      // userId:[undefined,Validators.required]
      userId: localStorage.getItem('userId'),
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.addTaskForm.controls;
  }

  sendTask(task: any) {
    this.submitted = true;
    console.log(task);
    if (this.addTaskForm.valid) {
      this.taskService.addTask(task).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          console.log('Task Added sucessfully');
          this.router.navigate(['/home']);
        },
        (error: any) => {
          this.errorMessage = 'Cannot add task';
          console.log(this.errorMessage);
          this.isSubmitting = false;
        }
      );
    } else {
      console.log('Error on adding task');
      this.errorMessage = 'Cannot add task';
    }
  }
}
