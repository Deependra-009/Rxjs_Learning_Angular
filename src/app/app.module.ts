import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/observables/all/all.component';
import { EventComponent } from './Components/observables/event/event.component';
import { IntervalComponent } from './Components/observables/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromisesComponent,
    ObservablesComponent,
    HomeComponent,
    AllComponent,
    EventComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
