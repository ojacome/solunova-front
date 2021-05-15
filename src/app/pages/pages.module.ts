import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
