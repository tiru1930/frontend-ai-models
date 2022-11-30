import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.services';

@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['./create-experiment.component.scss']
})
export class CreateExperimentComponent implements OnInit {

  sdks: any;
  solutionsJsonSchema: any;
  sdk_version: string | undefined;
  descriptionFormControl = new FormControl('', [Validators.required]);

  constructor(private modelsService: ModelsService, private router: Router) { }

  ngOnInit(): void {
    this.modelsService.getSdks().subscribe(
      data => {
        this.sdks = data;
      },
      err => {
      }
    );
  }

  selectedModelData(selectedModelData: any) {
    this.solutionsJsonSchema = selectedModelData.items[0].params_schema
  }

  onSubmitFn(jsonFormData: any) {
    if (this.sdk_version && jsonFormData.model_name && jsonFormData.task_type && jsonFormData.dataset) {
      const postData = {
        model_name: jsonFormData.model_name,
        task_type: jsonFormData.task_type,
        dataset_name: jsonFormData.dataset,
        sdk_version: this.sdk_version,
        description: this.descriptionFormControl.value
      }
      this.modelsService.createExperiment(postData).subscribe(
        data => {
          alert('Experiment created succesfully!');
          this.goToHome();
        },
        err => {
        }
      );
    } else {
      alert('Required all fields')
    }
  }

  goToHome() {
    void this.router.navigate(['/']);
  }

}
