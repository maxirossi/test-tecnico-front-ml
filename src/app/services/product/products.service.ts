import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders(),
  }

  constructor(
    private http: HttpClient,
  ) { }

  search( search : string = ''){
    let endpoint = `api/items?q=${search}`;
    return this.http.get<any>( endpoint, this.httpOptions)
      .pipe(
        catchError(this.errorHandle)
      )
  }

  infoById( id : string = ''){
    let endpoint = `api/v1/items/${id}/`;
    return this.http.get<any>( endpoint, this.httpOptions)
      .pipe(
        catchError(this.errorHandle)
      )
  }

    // Error handling
    errorHandle(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
  


}