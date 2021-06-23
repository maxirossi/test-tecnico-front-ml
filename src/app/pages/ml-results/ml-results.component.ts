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
  categories : Array<{ id:string, name:string }>;

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
    
          const pathFromRoot = res.data?.filters?.find((filter) => filter.id === "category")?.values[0]?.path_from_root;
          this.categories = pathFromRoot;
          let productItems = res.data.results;
          for (let i = 0; i < 4; i++){
            let productItem = productItems[i];
            if (productItem === undefined){
              this.loading = false;
              return [];
            }
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
