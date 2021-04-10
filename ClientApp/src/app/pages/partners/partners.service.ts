import { ResponseMessage } from './../../shared/models/responseMessage.models';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { BaseService } from 'src/services/base.service';
import { PartnersResponse } from './models/partners.responses';

@Injectable({
    providedIn: 'root'
  })
  export class PartnersService extends BaseService {
  
  
    constructor(private _http: HttpClient) {
        super()
    }
  
  
    search(skip: number,take : number): Observable<ResponseMessage<PartnersResponse []>> {
      return this._http.get<ResponseMessage<PartnersResponse []>>(environment.appConfig.apiUrl + '/partners/'+skip+'/'+take, this.httpOptions)
        .pipe(
          retry(0)
        )
    }

    searchWithinRange(range : number,skip: number,take : number): Observable<ResponseMessage<PartnersResponse []>> {
      return this._http.get<ResponseMessage<PartnersResponse []>>(environment.appConfig.apiUrl + '/partners' + '/'+range+'/'+skip+'/'+take, this.httpOptions)
        .pipe(
          retry(0)
        )
    }


    
}