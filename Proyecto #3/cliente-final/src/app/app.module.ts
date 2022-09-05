import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatesComponent } from './dates/dates.component';
import { FormComponent } from './form/form.component';
import { NavAppComponent } from './nav-app/nav-app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { FormService } from './servicios/form.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DatesComponent,
    FormComponent,
    NavAppComponent,
    PrincipalComponent,
    SplashComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
