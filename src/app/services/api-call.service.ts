import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http'
import  { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url = 'https://www.google.com/';
  constructor(private _httpClient: HttpClient) { 
  }

  submitData(data){
    return this._httpClient.post<any>(this.url,data)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse)
  {
      return throwError(error);
      
  }

}
