import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* pages */
import { MlHomeComponent } from './pages/ml-home/ml-home.component';
import { MlResultsComponent  } from './pages/ml-results/ml-results.component';
import { MlProductComponent  } from './pages/ml-product/ml-product.component';
import { MlResultsComponent404  } from './pages/ml-results-404/ml-results.component';
/* .pages */

const routes: Routes = [
  {
    path : '', 
    component : MlHomeComponent, 
    pathMatch: 'full'
  },
  {
    path : 'items/search/:search', 
    component : MlResultsComponent,
    pathMatch: 'full'
  },
  {
    path : 'items/:id', 
    component : MlResultsComponent,
    pathMatch: 'full'
  },
  {
    path : 'items/error/404', 
    component : MlResultsComponent404,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
