import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent {

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

  logout(){
    this.apiSvc.logout();
  }

}
