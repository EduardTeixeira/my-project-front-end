import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';

@Injectable({
   providedIn: 'root'
})
export class AuthenticationService {

   private url: string = `${environment.API_ENDPOINT}/oauth`;

   constructor(
      private http: HttpClient,
      private eh: HttpErrorHandlerService
   ) { }

   login(email: string, password: string): Observable<object> {

      const body = {
         username: email,
         password: password,
      }

      return this.http.post<object>(
         `${this.url}/token`,
         body
      ).pipe(
         catchError
            (this.eh.handleError)
      );

   }

}
