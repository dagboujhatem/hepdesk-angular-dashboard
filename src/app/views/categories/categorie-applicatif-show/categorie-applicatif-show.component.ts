import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieApplicatifService} from '../categorie-applicatif.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categorie-applicatif-show',
  templateUrl: './categorie-applicatif-show.component.html',
  styleUrls: ['./categorie-applicatif-show.component.css']
})
export class CategorieApplicatifShowComponent implements OnInit {
  categirieApplicatifID = null ;
  categorieApplicatifShowForm: FormGroup;
  solutionFile = null;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private categorieApplicatifService: CategorieApplicatifService) { }

  ngOnInit(): void {
    this.categorieApplicatifShowForm = this.formBuilder.group({
      type: [{value: '', disabled: true}, ],
      probleme: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ]
    });
    this.categirieApplicatifID = this.route.snapshot.paramMap.get('id');
    this.categorieApplicatifService.getCategorieApplicatifById(this.categirieApplicatifID).subscribe(
      (bodyResponse) => { this.loadCategorieData(bodyResponse); }
    );
  }

  loadCategorieData(bodyResponse) {
    const data = bodyResponse.data;
    this.categorieApplicatifShowForm.patchValue(data);
    this.solutionFile = data.solution_file;
  }

}
