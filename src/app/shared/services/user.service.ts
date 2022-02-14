import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
   providedIn: 'root'
})
export class UserService {

   private url: string = `${environment.API_ENDPOINT}/api/`;

   user = new User();
   private _partialUser: any;

   set partialUser(partialUser) {
      this._partialUser = partialUser;
   }

   get partialUser() {
      return this._partialUser;
   }

   constructor(
      private http: HttpClient,
   ) { }

   userIsAuthenticated(): boolean {
      //return sessionStorage.getItem('token') && !sessionStorage.getItem('loadingDevices');
      return false;
   }

   public login(user: User): Observable<User> {
      return new Observable<any>((observable) => {
         const body = {
            user: user.username,
            password: user.password,
         };
         this.http.post(this.url, body).subscribe(
            (response: any) => {
               observable.next(response);
               observable.complete();
            },
            (responseError: any) => {
               observable.error(responseError);
               observable.complete();
            }
         );
      });
   }

   logout(): void {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('logoutUser');
      sessionStorage.removeItem('monitoredAccountUnderstood');
      this.user = new User();
   }

}
