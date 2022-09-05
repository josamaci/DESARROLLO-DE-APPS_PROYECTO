import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private router: Router, private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get('http://localhost:3000/api/usuario')
  }

  login(email: any, password:any) { 
    this.router.navigate(['/principal']);}
}
