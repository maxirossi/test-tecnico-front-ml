import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'ml-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() item : any;

  constructor() { }

  ngOnInit(): void {
  }

}
