import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import * as _ from 'lodash';
import {Observable, of} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Params} from '@angular/router';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) {
    }

    refactorUrl(url: string[] | string): string {
        if( _.isArray(url) ) {
            url = url as string[];
            url = url.join('/');
        }

        url = url as string;

        if (url.indexOf('http://') === -1
            && url.indexOf('https://') === -1) {
            if (url.charAt(0) === '/') {
                url = url.replace('/', '');
            }
            url = ['http://localhost:3030', url].join('/');
        } else {
            url = url as string;
        }

        return url;
    }

    /**
     * Por medio de los parámetros page y pageSize de la queryString devuelve el fragmento de la url para paginar un listado.
     * @param params: Params
     * @return string
     */
    getOffsetLimitUrlByParams(params: Params): string {
        const limit = params.pageSize || 10;
        const offset = params.page ? ( limit * (params.page - 1) ) : 0;

        return `${offset}/${limit}`;
    }

    fixQueryParams(queryParams: Params): Params {
        const list = [
            { from: 'sortBy', to: 'ordenarPor' },
            { from: 'filterBy', to: 'filtroEstado' },
            { from: 'asc', to: 'ordenarAscendente' },
            { from: 'q', to: 'terminoDeBusqueda' },
            { from: 'path', to: 'path' },
            { from: 'serviceId', to: 'servicioId' },
            { from: 'filter', to: 'filtro' },
            { from: 'pageSize', to: '' },
            { from: 'page', to: '' }
        ];

        const result = {};

        _.forEach(queryParams, (value: any, property: any) => {
            const index = _.findIndex(list, item => item.from === property);
            const newProperty = index > -1 && list[index].to || false;

            if (index > -1) {
                if (newProperty) {
                    result[newProperty] = value;
                }
            } else {
                result[property] = value;
            }
        });

        return result;
    }

    objectToQueryString(params: Params) {
        return $.param(params);
    }

    calculateOffsetByQueryList(params: Params): Params {
        const newParams = {...params};
        const pageSize = newParams && newParams.pageSize || 10;
        const page = newParams && newParams.page || 1;
        const offset = pageSize * (page - 1);

        return {
            ...newParams,
            'desplazamiento': offset,
            'registrosPorPagina': pageSize
        };
    }

    createHttpParams(queryParams: Params): HttpParams {
        let httpParams = new HttpParams();

        queryParams = this.fixQueryParams(queryParams);

        Object.keys(queryParams).forEach((key) => {
            httpParams = httpParams.append(key, queryParams[key]);
        });

        return httpParams;
    }

    jsonp<T>(url: any[] | string, callback: string): Observable<any> {
        url = this.refactorUrl(url);
        return this.http.jsonp(url,  callback);
    }

    get<T>(url: any[] | string, queryString?: Params, options?: any): Observable<any> {
        const params = queryString ? this.createHttpParams(queryString) : {};

        options = _.merge({}, {params}, options);
        url = this.refactorUrl(url);

        return this.http.get(url, options).pipe(
            retry(3)
        );
    }

    post<T>(url: any[] | string, data?: any, httpOptions?: any): Observable<any> {
        const formData = objectToFormData(data);
        url = this.refactorUrl(url);
        httpOptions = httpOptions || {};
        return this.http.post(url, formData, httpOptions);
    }

    postFz<T>(url: any[] | string, data?: any, httpOptions?: any): Observable<any> {
        url = this.refactorUrl(url);
        httpOptions = httpOptions || {};
        let responseData  =  this.http.post(url, data, httpOptions); 
        return this.http.post(url, data, httpOptions).pipe(
            retry(3)
        );
    }

    getFz<T>(url: any[] | string, httpOptions?: any): Observable<any> {

        httpOptions = httpOptions || {};
        url = this.refactorUrl(url);

        return this.http.get(url, httpOptions).pipe(
            retry(3)
        );
    }

    patch<T>(url: any[] | string, data: any, httpOptions?: any): Observable<any> {
        url = this.refactorUrl(url);

        return this.http.patch(url, data, httpOptions).pipe(
            retry(3)
        );
    }

    put<T>(url: any[] | string, data: any, httpOptions?: any): Observable<any> {
        url = this.refactorUrl(url);

        return this.http.put(url, data, httpOptions).pipe(
            retry(3)
        );
    }

    delete<T>(url: any[] | string, queryString?: Params, options?: any): Observable<any> {
        const params = queryString ? this.createHttpParams(queryString) : {};

        options = _.merge({}, {params}, options);
        url = this.refactorUrl(url);

        return this.http.delete(url, options).pipe(
            retry(3)
        );
    }
}
