import { Component, OnInit } from '@angular/core';
import { MLHeaderComponent } from '../../components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from '../../services/product/products.service';


@Component({
  selector: 'app-ml-product',
  templateUrl: './ml-product.component.html',
  styleUrls: ['./ml-product.component.sass']
})
export class MlProductComponent implements OnInit {

  MLitem : any;

  constructor(private routes: ActivatedRoute, private productsService : ProductsService) { 
    this.routes.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id != ''){
      this.searchInfoById(id);
    }
  })
  }

  ngOnInit(): void {
  }

  searchInfoById(id : string) : void
  {
    this.productsService.infoById(id)
    .subscribe((res) => {
      let data = res.data.a;
        let item = {
          "id": data.id,
          "condition" : data.condition,
          "picture" : data.pictures[0].secure_url,
          "description" : res.data.b.plain_text,
          "title": data.title,
          "price": {
          "currency": data.currency_id,
          "amount": data.price,
        }
      }
      this.MLitem = item;
      console.log('item =>', item);
    });
  }
}
