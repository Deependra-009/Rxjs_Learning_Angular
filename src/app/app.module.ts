import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/observables/all/all.component';
import { EventComponent } from './Components/observables/event/event.component';
import { IntervalComponent } from './Components/observables/interval/interval.component';
import { OfFromComponent } from './Components/observables/of-from/of-from.component';
import { ToArrayComponent } from './Components/observables/to-array/to-array.component';
import { CustomObservableComponent } from './Components/observables/custom-observable/custom-observable.component';
import { MapComponent } from './Components/observables/map/map.component';
import { PluckComponent } from './Components/observables/pluck/pluck.component';
import { FilterComponent } from './Components/observables/filter/filter.component';
import { TapComponent } from './Components/observables/tap/tap.component';
import { TakeComponent } from './Components/observables/take/take.component';
import { RetryComponent } from './Components/observables/retry/retry.component';
import { DebounceTimeDistinctUntilChangeComponent } from './Components/observables/debounce-time-distinct-until-change/debounce-time-distinct-until-change.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromisesComponent,
    ObservablesComponent,
    HomeComponent,
    AllComponent,
    EventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeDistinctUntilChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
