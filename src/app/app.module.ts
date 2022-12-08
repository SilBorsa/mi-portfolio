import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabComponent } from './components/cab/cab.component';
import { LogosComponent } from './components/logos/logos.component';
import { InfoComponent } from './components/info/info.component';
import { LabComponent } from './components/lab/lab.component';
import { EduComponent } from './components/edu/edu.component';
import { HabComponent } from './components/hab/hab.component';
import { PyComponent } from './components/py/py.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    CabComponent,
    LogosComponent,
    InfoComponent,
    LabComponent,
    EduComponent,
    HabComponent,
    PyComponent,
    PieComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
