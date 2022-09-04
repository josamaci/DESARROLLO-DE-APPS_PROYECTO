import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormComponent } from './form/form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatesComponent } from './dates/dates.component';
import { MvcComponent } from './mvc/mvc.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "form", component: FormComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "calendar", component: CalendarComponent },
     { path: "dates", component: DatesComponent },
     { path: "mvc", component: MvcComponent },
     { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
