import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from '../form/form.component'
@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get('https://proyecto03-dawm-default-rtdb.firebaseio.com/cita.json')
  }
}
