import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';
const base_url= environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.leerToken();
  }



  login( email: string, password: string ){
    return this.http.post( `${base_url}/login`, { email, password })
    .pipe(
      tap( res => {
        
        if( res["ok"] ){          
          this.guardarToken(res["token"])
          this.router.navigateByUrl('/perfil');
        }
      })
    )  
  }

  logout() {

    localStorage.removeItem('token-solu');
    this.token = null;    
    this.router.navigateByUrl('/login');
  }

  private guardarToken(token: string) {

    this.token = token;
    localStorage.setItem('token-solu', this.token)
  }

  private leerToken() {
    
    if (localStorage.getItem('token-solu')) {
      this.token = localStorage.getItem('token-solu');
    }
    else {
      this.token = null;
    }    
  }
}
