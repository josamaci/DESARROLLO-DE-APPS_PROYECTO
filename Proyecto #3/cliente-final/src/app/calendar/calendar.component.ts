import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {MatTableDataSource} from '@angular/material/table';
import { Plan } from '../interfaces/plan'
import { PlanService } from "../servicios/plan.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  planes:Plan[] = []
  dias = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO']
  selected: string | null;
  constructor(public appComponent:AppComponent, private planService:PlanService){
    this.selected = null;
    planService.obtenerDatos().subscribe(respuesta => {
      this.planes = respuesta as Plan[]
    })
  }
      /*applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }*/
  ngOnInit(): void {
  }

}
