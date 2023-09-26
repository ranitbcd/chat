import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginComponent } from '../auth-module/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public Router : Router
  ){}

  handelRouteToEmail(){
   console.log('clicked')
    this.Router.navigate([`auth/login`])
  }
}
