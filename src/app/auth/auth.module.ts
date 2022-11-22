import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AppModule } from '../app.module';


@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
    ]
})
export class AuthModule { }
