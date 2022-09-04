import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitioAngular';
  constructor(private router: Router) {}
  perfil() {
    this.router.navigate(['principal']);
  }
  calendario() {
    this.router.navigate(['calendar']);
  }
  pacientes() {
    this.router.navigate(['dates']);
  }
}

