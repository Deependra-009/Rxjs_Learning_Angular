import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/observables/all/all.component';
import { CustomObservableComponent } from './Components/observables/custom-observable/custom-observable.component';
import { EventComponent } from './Components/observables/event/event.component';
import { FilterComponent } from './Components/observables/filter/filter.component';
import { IntervalComponent } from './Components/observables/interval/interval.component';
import { MapComponent } from './Components/observables/map/map.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { OfFromComponent } from './Components/observables/of-from/of-from.component';
import { PluckComponent } from './Components/observables/pluck/pluck.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
