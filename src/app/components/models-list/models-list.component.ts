import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.services';

export interface ModelsData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent implements OnInit {
  @Output() selectedModelData = new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'description'];
  dataSource: ModelsData[] = [];

  constructor(private modelsService: ModelsService, private router: Router) { }

  ngOnInit(): void {
    this.modelsService.getModules().subscribe(
      data => {
        this.dataSource = data.items
      },
      err => {
      }
    );
  }

  clickedRow(row: ModelsData) {
    this.modelsService.getSolutions(row.name).subscribe(solutionsData => {
      this.selectedModelData.emit(solutionsData);
    })
  }
}
