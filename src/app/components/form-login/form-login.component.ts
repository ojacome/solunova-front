import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  loginForm: FormGroup;
  fieldTextType = false;
  loading = false;



  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { 
    this.crearFormulario();
  }


  get emailNoValido(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched
  }
  get passwordNoValido(){
      return this.loginForm.get('password').invalid && this.loginForm.get('password').touched
  }

  crearFormulario(){
    this.loginForm = this.fb.group({
      email:      [ '', [Validators.required, Validators.email] ],
      password:   [ '', [Validators.required] ]
    })
  }

  onSubmit(){
    
    const { email, password } = this.loginForm.value;
    this.loading = true;

    this.api.login(email, password)
    .subscribe( 
      () => this.loading = false,
      () => this.loading = false 
    );
  }
}
