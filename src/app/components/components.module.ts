import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class ComponentsModule { }
