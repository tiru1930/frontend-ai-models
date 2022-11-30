import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { CreateExperimentComponent } from './components/create-experiment/create-experiment.component';
import { ListExperimentsComponent } from './components/list-experiments/list-experiments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialDesignFrameworkModule } from '@ajsf/material';


@NgModule({
  declarations: [
    AppComponent,
    ModelsListComponent,
    CreateExperimentComponent,
    ListExperimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialDesignFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
