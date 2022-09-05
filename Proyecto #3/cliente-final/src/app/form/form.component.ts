import { Component, ComponentFactoryResolver} from '@angular/core';
import { FormService } from "../servicios/form.service";
import { Usuario } from '../interfaces/usuario';

let usuarios:Usuario[]

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  email: string;
  password: string;
  constructor(private formService:FormService) {
    this.email=""; 
    this.password="";
    usuarios = []
    formService.obtenerDatos().subscribe(respuesta => {
      usuarios = respuesta as Usuario[]
    })

  }

  login(email: any, password:any) {
    let usuario:Usuario
    usuarios.forEach(usuario => {
        if((email == usuario.CORREO && password==usuario.CONSTRASENIA || email == "" && password=="")){
          this.formService.login(email, password)}
    });
    
  }

}
