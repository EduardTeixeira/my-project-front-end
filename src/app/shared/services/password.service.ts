import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';

@Injectable({
   providedIn: 'root'
})
export class PasswordService {

   private url: string = `${environment.API_ENDPOINT}/password`;

   constructor(
      private http: HttpClient,
      private eh: HttpErrorHandlerService
   ) { }

   recoveryPassword(email: string): Observable<object> {

      const body = {
         username: email
      }

      return this.http.post<object>(
         `${this.url}/recovery`,
         body
      ).pipe(
         catchError
            (this.eh.handleError)
      );

   }

}
