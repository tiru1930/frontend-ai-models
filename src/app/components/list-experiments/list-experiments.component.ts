import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.services';

export interface ModelsData {
  name: string;
  description: string;
  params: object;
  results: object;
  status: string
}


@Component({
  selector: 'app-list-experiments',
  templateUrl: './list-experiments.component.html',
  styleUrls: ['./list-experiments.component.scss']
})
export class ListExperimentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'params', 'results', 'status'];
  dataSource: ModelsData[] = [];

  constructor(private modelsService: ModelsService,  private router: Router) { }

  ngOnInit(): void {
    this.modelsService.getExperiments().subscribe(
      data => {
        this.dataSource =  data.items
      },
      err => {
      }
    );
  }

  createExperiment() {
    void this.router.navigate(['create-experiment']);
  }

}
