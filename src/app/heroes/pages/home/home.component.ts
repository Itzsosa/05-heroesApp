import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 10px;
    }

    .icon-align {
      vertical-align: middle;
      margin-right: 8px;
    }


    `
  ]
})
export class HomeComponent {

  get auth(){
    return this.authService.auth;
  }
  constructor(private router:Router, private authService:AuthService) { }

  logout(){
    this.router.navigate(['./auth']);
  }
}