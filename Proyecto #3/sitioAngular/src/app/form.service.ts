import { Injectable } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
let bd = {
  'correo': 'a@a.a',
  'contrasenia': '123'
}
let bd2 = {
  'correo': '',
  'contrasenia': ''
}
@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private router: Router) {}
  //:Observable<any>
  login(email: any, password:any) {
    if((email == bd.correo && password==bd.contrasenia) || (email == bd2.correo && password==bd2.contrasenia)){
    this.router.navigate(['principal']);}
    //return this.http.post("./", email, password);
  }
}
