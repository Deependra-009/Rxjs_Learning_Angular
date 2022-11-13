import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/observables/all/all.component';
import { AsyncSubjectComponent } from './Components/observables/async-subject/async-subject.component';
import { ConcatMapComponent } from './Components/observables/concat-map/concat-map.component';
import { ConcatComponent } from './Components/observables/concat/concat.component';
import { CustomObservableComponent } from './Components/observables/custom-observable/custom-observable.component';
import { DebounceTimeDistinctUntilChangeComponent } from './Components/observables/debounce-time-distinct-until-change/debounce-time-distinct-until-change.component';
import { EventComponent } from './Components/observables/event/event.component';
import { ExhaustMapComponent } from './Components/observables/exhaust-map/exhaust-map.component';
import { FilterComponent } from './Components/observables/filter/filter.component';
import { IntervalComponent } from './Components/observables/interval/interval.component';
import { MapComponent } from './Components/observables/map/map.component';
import { MergeMapComponent } from './Components/observables/merge-map/merge-map.component';
import { MergeComponent } from './Components/observables/merge/merge.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { OfFromComponent } from './Components/observables/of-from/of-from.component';
import { PluckComponent } from './Components/observables/pluck/pluck.component';
import { ReplaySubjectComponent } from './Components/observables/replay-subject/replay-subject.component';
import { RetryComponent } from './Components/observables/retry/retry.component';
import { SubjectComponent } from './Components/observables/subject/subject.component';
import { SwitchMapSearchComponent } from './Components/observables/switch-map-search/switch-map-search.component';
import { SwitchMapComponent } from './Components/observables/switch-map/switch-map.component';
import { TakeComponent } from './Components/observables/take/take.component';
import { TapComponent } from './Components/observables/tap/tap.component';
import { ToArrayComponent } from './Components/observables/to-array/to-array.component';
import { PromisesComponent } from './Components/promises/promises.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'promises',
    component:PromisesComponent
  },
  {
    path:'observables',
    component:ObservablesComponent,
    children:[
      {
        path:'exhaust-map',
        component:ExhaustMapComponent
      },
      {
        path:'switch-map-search',
        component:SwitchMapSearchComponent
      },
      {
        path:'',
        component:AllComponent
      },
      {
        path:'from-event',
        component:EventComponent
      },
      {
        path:'interval',
        component:IntervalComponent
      },
      {
        path:'of-from',
        component:OfFromComponent
      },
      {
        path:'to-array',
        component:ToArrayComponent
      },
      {
        path:'custom-observable',
        component:CustomObservableComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
        path:'pluck',
        component:PluckComponent,
      },
      {
        path:'filter',
        component:FilterComponent,
      },
      {
        path:'tap',
        component:TapComponent,
      },
      {
        path:'take',
        component:TakeComponent
      },
      {
        path:'retry',
        component:RetryComponent
      },
      {
        path:'debounce-time-distinct-until-change',
        component:DebounceTimeDistinctUntilChangeComponent
      },
      {
        path:'subject',
        component:SubjectComponent
      },
      {
        path:'replay-subject',
        component:ReplaySubjectComponent
      },
      {
        path:'async-subject',
        component:AsyncSubjectComponent
      },
      {
        path:'concat',
        component:ConcatComponent
      },
      {
        path:'merge',
        component:MergeComponent
      },
      {
        path:'merge-map',
        component:MergeMapComponent
      },
      {
        path:'concat-map',
        component:ConcatMapComponent
      },
      {
        path:'switch-map',
        component:SwitchMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
