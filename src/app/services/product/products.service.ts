import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { CommomHeaders } from 'src/app/shared/httpHeaders/CommonHeaders';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private headers : CommomHeaders,
  ) { }

  getProduct(id: string) {
    return this.apiService.getFz(`/api/v1/back/products/${id}`, this.headers.getStdHeaders())
  }
}