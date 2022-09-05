import { Component, OnInit } from '@angular/core';
import { CitaService } from "../servicios/cita.service";
import {MatTableDataSource} from '@angular/material/table';
import { Cita } from '../interfaces/cita'
import { Paciente } from '../interfaces/paciente'
import { FormService } from "../servicios/form.service";
import { Usuario } from '../interfaces/usuario'
import { PacienteService } from "../servicios/paciente.service";

interface imprimir{
  id: number,
  nombre: string,
  apellido: string,
  correo: string,
  fecha: Date,
  receta: string
} 

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  citas:Cita[] = []
  pacientes:Paciente[] = []
  usuarios:Usuario[] = []
  usuariosLeer: imprimir[] = []
  selection:any;


  constructor(private citaService:CitaService, private formService:FormService, private pacienteService:PacienteService){
    citaService.obtenerDatos().subscribe(respuesta => {
      this.citas = respuesta as Cita[]
    })
    
    pacienteService.obtenerDatos().subscribe(respuesta2 => {
      this.pacientes = respuesta2 as Paciente[]
    })

    formService.obtenerDatos().subscribe(respuesta3 => {
      this.usuarios = respuesta3 as Usuario[]   
    })

    
  }

  ngOnInit(): void {
  }

  cambio = (event:any) => {
    console.log(event.target.value)
  }

  }

