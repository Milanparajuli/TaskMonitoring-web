import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/common/nav/nav.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';

@NgModule({
  declarations: [
    TaskComponent,
    EditTaskComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule],
})
export class TaskModule {}
