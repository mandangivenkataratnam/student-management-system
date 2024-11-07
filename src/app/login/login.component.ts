import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName:any;
  password:any;
  reqpwd:any;
  user:any;
  constructor(private router:Router){}
  checkLogin(){
    console.log(this.userName)
    this.reqpwd = this.userName.slice(0,3)+"@123";
    if(this.password==this.reqpwd){
      alert("Your Login is Success")
      this.user={
        userName:this.userName
      }
      localStorage.setItem("loggedin",JSON.stringify(this.user))
      this.router.navigateByUrl("/admin/students")
    }
  }
}
