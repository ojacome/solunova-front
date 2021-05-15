import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ){ }

  canActivate(): boolean  {
    
    if( !this.apiService.token ){
      return true;
    }
    else{
      this.router.navigateByUrl('/perfil');
      return false;
    }
  }
  
}
