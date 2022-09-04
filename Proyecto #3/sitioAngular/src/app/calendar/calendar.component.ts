import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {MatTableDataSource} from '@angular/material/table';
export interface Pacient {
  id: number;
  name: string;
  lastname: string;
  email: string;
  date: string;
  recipies: string;
}
var today = new Date();
var fecha = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const PACIENT_DATA: Pacient[] = [
  {id: 1, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 2, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 3, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 4, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 5, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 6, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 7, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
  {id: 8, name: 'Juan', lastname: 'Marmio', email: 'a@a.a', date: fecha, recipies:'ver'},
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Apellido', 'Correo', 'Fecha Cita', 'Recetas'];
  dataSource = new MatTableDataSource(PACIENT_DATA);
  selected: Date | null;
  constructor(public appComponent:AppComponent){
    this.selected = null;
  }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
  ngOnInit(): void {
  }

}
