import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { ConectionComponent } from './conection/conection.component';
import { HttpClientModule } from '@angular/common/http';
import { ConectionService } from './conection/conection.service';

@NgModule({
  declarations: [
    AppComponent,
    SanjoseComponent,
    SeattleComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent,
    ConectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
