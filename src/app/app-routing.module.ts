import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/observables/all/all.component';
import { EventComponent } from './Components/observables/event/event.component';
import { IntervalComponent } from './Components/observables/interval/interval.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { OfFromComponent } from './Components/observables/of-from/of-from.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
