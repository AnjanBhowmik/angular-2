import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {
  //data:Object;
  //public emp:Object;
  constructor (private http: Http) {}
  private jsonUrl = 'app/json/data.json';  // URL to web API
  getData () {
     return this.http.get(this.jsonUrl)
                  .map((res:Response) => res.json());
  }
                   
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

