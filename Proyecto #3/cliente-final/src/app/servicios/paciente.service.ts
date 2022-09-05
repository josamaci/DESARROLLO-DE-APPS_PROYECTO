import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('http://localhost:3000/api/paciente')
  }
}
