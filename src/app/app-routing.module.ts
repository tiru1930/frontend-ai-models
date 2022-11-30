import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExperimentComponent } from './components/create-experiment/create-experiment.component';
import { ListExperimentsComponent } from './components/list-experiments/list-experiments.component';

const routes: Routes = [
  {
    path: '',
    component: ListExperimentsComponent
  },
  {
    path: 'create-experiment',
    component: CreateExperimentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
