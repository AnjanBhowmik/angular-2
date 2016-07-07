import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { EmployeeData} from './employeeData';
@Injectable()
export class EmployeelistService {

    constructor(private http:Http){}
    private jsonUrl = 'app/json/empData.json'
c:EmployeeData;
    getEmpData(): Observable<EmployeeData[]>{
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


}//eof class EmployeeService{}