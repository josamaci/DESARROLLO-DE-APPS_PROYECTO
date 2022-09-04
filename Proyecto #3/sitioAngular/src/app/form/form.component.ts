import { Component} from '@angular/core';
import { FormService } from "../form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  email: string;
  password: string;

  constructor(public formService:FormService) {this.email=""; this.password="";}

  login() {
    this.formService.login(this.email, this.password)
  }

}
