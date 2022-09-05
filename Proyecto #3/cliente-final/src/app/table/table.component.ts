import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Cita } from '../interfaces/cita';
@Component({
  selector: 'app-table',
  template: `<ng-container>
  <div class="table-responsive">
      <table class="table table-hover">
          <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Fecha Cita</th>
                  <th scope="col">Recetas</th>
              </tr>
          </thead>
          <tbody *ngFor="let cita of citas">
              <tr *ngIf="selection == cita['ID_PACIENTE']">
                  <td scope="row">{{cita['ID_CITA']}}</td>
                  <ng-container *ngFor="let usuario of usuarios">
                      <td scope="row" *ngIf="cita['ID_PACIENTE']  == usuario['ID_USUARIO']">{{usuario['NOMBRE']}}</td>
                      <td scope="row" *ngIf="cita['ID_PACIENTE']  == usuario['ID_USUARIO']">{{usuario['APELLIDO']}}</td>
                      <td scope="row" *ngIf="cita['ID_PACIENTE']  == usuario['ID_USUARIO']">{{usuario['CORREO']}}</td>
                  </ng-container>
                  <td scope="row">{{cita['FECHA']}}</td>
                  <td scope="row">ver</td>
              </tr>
          </tbody>

      </table>
  </div>
</ng-container>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() usuarios!:Usuario[];
@Input() selection!:number;
@Input() citas!:Cita[];

  constructor() { }

  ngOnInit(): void {
  }

}
