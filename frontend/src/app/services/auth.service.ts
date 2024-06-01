import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginForm} from "../models/login.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/api/auth';
  token:string="";
  isAuthenticated:boolean=false;
  constructor(private http: HttpClient,private router:Router) { }

  login(login:LoginForm): Observable<LoginForm> | null {
    this.isAuthenticated=true;
    return null;
  }

  logout(): void {
    this.isAuthenticated=false
    this.router.navigateByUrl("/admin")
  }
}
