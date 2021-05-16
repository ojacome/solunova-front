import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register/form-register.component';
import { CardPerfilComponent } from './card-perfil/card-perfil.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent,
    CardPerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormLoginComponent,
    FormRegisterComponent,
    CardPerfilComponent
  ]
})
export class ComponentsModule { }
