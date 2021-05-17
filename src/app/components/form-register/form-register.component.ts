import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent  {

  registerForm: FormGroup;
  fieldTextType = false;
  loading = false;



  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { 
    this.crearFormulario();
  }

  get emailNoValido(){
    return this.registerForm.get('email').invalid && this.registerForm.get('email').touched
  }
  get passwordNoValido(){
      return this.registerForm.get('password').invalid && this.registerForm.get('password').touched
  }
  get usernameNoValido(){
      return this.registerForm.get('username').invalid && this.registerForm.get('username').touched
  }
  get first_nameNoValido(){
      return this.registerForm.get('first_name').invalid && this.registerForm.get('first_name').touched
  }
  get last_nameNoValido(){
      return this.registerForm.get('last_name').invalid && this.registerForm.get('last_name').touched
  }

  crearFormulario(){
    this.registerForm = this.fb.group({
      email:      [ '', [Validators.required, Validators.email] ],
      password:   [ '', [Validators.required, Validators.minLength(8)] ],
      first_name: [ '', [Validators.required] ],
      last_name:  [ '', [Validators.required] ],
      username:   [ '', [Validators.required] ]
    })
  }

  onSubmit(){
    
    const user = {...this.registerForm.value};    
    this.loading = true;
    this.api.register(user)
    .subscribe( 
      () => this.loading = false, 
      () => this.loading = false 
    );
  }
}
