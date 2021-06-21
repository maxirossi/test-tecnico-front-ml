import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {UserHelper} from '@app/_shared/helpers/UserHelper';
import {Logout} from '@app/core/store/app.actions';
import {Select, Store} from '@ngxs/store';
import {McRouter} from '@app/_services';
import {AppState} from '@app/core/store/app.state';
import {ClienteService} from '@app/_services/clientes/cliente.service';

@Injectable({
    providedIn: 'root'
})

export class CommomHeaders{

    constructor(
        private mcRouter: McRouter,
        private store: Store,
        private userHelper : UserHelper,
        private clientService : ClienteService,
    ) 
    {}
    
    getAuthHeaders() : any
    {
        if (this.userHelper.getToken() == ''){
            if (this.userHelper.getUserPersist() == false){
                this.store.dispatch(new Logout());
                this.mcRouter.saveCurrentUrlAndGoToLogin(this.store.selectSnapshot(AppState.adminPrefix));
            }
       }   
       const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept' : 'application/json, text/javascript, */*; q=0.01',
            }),withCredentials: true
        };
        return this.getHeaderImage();
    }

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

    protected haveToken() : boolean
    {
        return this.userHelper.haveToken();
    }

    getHeaderImage(){
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return headers;
    }

}
