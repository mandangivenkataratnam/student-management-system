import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user:any;
  userName:any;
  constructor(private router:Router){}

  ngOnInit(){
    if(localStorage.getItem("loggedin")==null){
      this.router.navigateByUrl("/")
    }
    else{
      this.user = localStorage.getItem("loggedin");
      this.userName = JSON.parse(this.user).userName;
    }
  }

  logOut(){
    localStorage.removeItem("loggedin");
    this.router.navigateByUrl("/")
  }
}
