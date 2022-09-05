import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('https://proyecto03-dawm-default-rtdb.firebaseio.com/plan.json')
  }
}
