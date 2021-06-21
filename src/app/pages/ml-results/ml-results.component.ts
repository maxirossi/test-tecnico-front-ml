import { Component, OnInit } from '@angular/core';
import { MLHeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ml-results',
  templateUrl: './ml-results.component.html',
  styleUrls: ['./ml-results.component.sass']
})
export class MlResultsComponent implements OnInit {

  private search = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      let search = params['search'];
      this.searchProduct = search;
    });
  }

  ngOnInit(): void {
  }

  private searchProduct(q : string) : void
  {
    if (q != ''){
      this.search = q;
    }else{
      this.search = '';
    }
  }

}
