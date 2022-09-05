import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  constructor(public appComponent:AppComponent){}

      ngOnInit(): void {
      }
}
