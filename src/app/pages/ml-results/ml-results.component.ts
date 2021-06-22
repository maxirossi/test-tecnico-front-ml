import { Component, OnInit } from '@angular/core';
import { MLHeaderComponent } from '../../components/header/header.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';

@Component({
  selector: 'app-ml-results',
  templateUrl: './ml-results.component.html',
  styleUrls: ['./ml-results.component.sass']
})

export class MlResultsComponent implements OnInit {

  private search = '';
  arrProducts : Array<any> = [];
  loading = true;
  q : string = '';

  constructor(private activatedRoute: ActivatedRoute, private productsService : ProductsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      let search = params['q'];
      this.searchProduct(search);
      this.q = params['q'];
    });
  }

  ngOnInit(): void {
  }

  private searchProduct(q : string) : void
  {
    if (q != ''){
      this.arrProducts = [];
      this.search = q;
      this.productsService.search(q)
        .subscribe((res) => {
          let productItems = res.data.results;
          for (let i = 0; i < 4; i++){
            let productItem = productItems[i];
            let item = {
              id : productItem.id,
              title : productItem.title,
              condition : productItem.condition,
              shipping : productItem.shipping.free_shipping,
              state_name : productItem.address.state_name,
              picture : productItem.thumbnail,
                price : {
                  currency : productItem.currency_id,
                  amount : productItem.price,
                }
            };
            this.arrProducts.push(item);
          }
        });
    }else{
      this.search = '';
    }
    this.loading = false;
  }

}
