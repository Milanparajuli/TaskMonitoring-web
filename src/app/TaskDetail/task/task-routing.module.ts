import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from 'src/app/common/nav/nav.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskComponent } from './task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: 'nav',
        component: NavComponent,
      },
      {
        path: '',
        component: TaskDetailComponent,
      },
      {
        path: 'addtask',
        component: AddTaskComponent,
      },
      {
        path: 'edit-task/:id',
        component: EditTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
