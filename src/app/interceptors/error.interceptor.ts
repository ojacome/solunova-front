import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  _authService = this.injector.get(ApiService);

  constructor(    
    private injector: Injector    
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          Swal.fire(
            'Ups!',
            error.error.msg,
            'warning'
          );
          this._authService.logout();
          return throwError(error);
        } 
        else {

          if( !error.error.ok ){
            let msg = '';            

            if( error.error.errors ){
              msg = this.getErrorServerValidation( error.error.errors )              
            }
            else{
              msg = error.error.msg;
            }
            
            Swal.fire(
              'Ups!',
              msg,
              'error'
            )
          }

          return throwError(error);
        }
      })
    );
  }


  getErrorServerValidation(errors): string{
    let msg = '';

    if(errors.email)
      msg += errors.email.msg
    if(errors.password)
      msg += errors.password.msg  

    return msg;
  }
}
