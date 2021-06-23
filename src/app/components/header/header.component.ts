import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class MLHeaderComponent implements OnInit {

  q : string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      let search = params['q'];
      this.q = params['q'];
    });
  }
 
  ngOnInit(): void {

  }

  searchProduct()
  {
    this.searchP(this.q);
  }

  handleClick(event: Event) { 
    this.searchP(this.q);
  } 

  searchP(q : string)
  {
    if (q != '')
    {
      const route = `items?q=${encodeURIComponent(this.q)}`;
      this.router.navigateByUrl(route);
    }
  }

  goHome()
  {
    this.router.navigateByUrl("/");
  }
}
