import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthNavComponent } from './auth-nav/auth-nav.component';


@NgModule({
    declarations: [
        AuthComponent,
        AuthNavComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AuthModule { }
