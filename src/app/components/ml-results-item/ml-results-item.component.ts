import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-ml-results-item',
  templateUrl: './ml-results-item.component.html',
  styleUrls: ['./ml-results-item.component.sass']
})
export class MlResultsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
