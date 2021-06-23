import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  urlMeli : string = environment.url_meli;

  @Input() categories : Array<{ id: string, name: string }>;

  constructor() { }

  ngOnInit(): void {
  }

}
