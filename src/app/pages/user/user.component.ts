import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {


  user: User;

  

  constructor(
    private apiSvc: ApiService
  ) { 
    this.getUser()
  }


  getUser(){
    this.apiSvc.getUser()
    .subscribe( res => this.user = res.user )
  }
}
