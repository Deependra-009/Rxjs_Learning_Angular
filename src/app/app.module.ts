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
import { SubjectComponent } from './Components/observables/subject/subject.component';
import { Comp1Component } from './Components/comp/comp1/comp1.component';
import { Comp2Component } from './Components/comp/comp2/comp2.component';
import { Comp3Component } from './Components/comp/comp3/comp3.component';
import { ReplaySubjectComponent } from './Components/observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Components/observables/async-subject/async-subject.component';
import { ConcatComponent } from './Components/observables/concat/concat.component';
import { MergeComponent } from './Components/observables/merge/merge.component';
import { MergeMapComponent } from './Components/observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './Components/observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './Components/observables/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './Components/observables/switch-map-search/switch-map-search.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './Components/observables/exhaust-map/exhaust-map.component';

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
    DebounceTimeDistinctUntilChangeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    SwitchMapSearchComponent,
    ExhaustMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
