import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MLHeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { MlSearchInputComponent } from './components/ml-search-input/ml-search-input.component';

import { MlHomeComponent } from './pages/ml-home/ml-home.component';
import { MlResultsComponent  } from './pages/ml-results/ml-results.component';
import { MlProductComponent  } from './pages/ml-product/ml-product.component';
import { MlResultsComponent404  } from './pages/ml-results-404/ml-results.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    MLHeaderComponent,
    SearchResultsComponent,
    ProductDetailComponent,
    FooterComponent,
    MlSearchInputComponent,
    MlResultsComponent,
    MlProductComponent,
    MlHomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
