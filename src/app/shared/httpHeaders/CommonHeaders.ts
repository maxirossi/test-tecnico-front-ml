import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class CommomHeaders{

    constructor(
    ) 
    {}
    
    getStdHeaders() : any
    {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json, text/javascript, */*; q=0.01',
            }),withCredentials: true
        };
        return httpOptions;
    }

    getHeaderImage(){
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return headers;
    }

}
