import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginForm} from "../../models/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

 loginrequest:LoginForm={
   password:"hhhh",
   userName:"user"
 }
  constructor( private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
   if(this.authService.isAuthenticated){
     this.router.navigate(["admin"])
   }
 }

  submitForm(): void {
    this.authService.isAuthenticated=true
    this.router.navigate(["admin"])
  }
    //   if (this.loginrequest.userName !== '' && this.loginrequest.password !== '') {
    //     this.authService.login(this.loginrequest).subscribe(
    //       response => {
    //         console.log('Login successful', response);
    //       },
    //       error => {
    //         console.error('Login failed', error);
    //       }
    //     );
    //   } else {
    //     console.error('Username or password is undefined');
    //   }
    // }
}
