import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { GlobalContextService } from './../../shared/services/global-context.service';
import { EncryptionService } from './../../shared/services/encryption.service';

@Injectable()
export class OptionsInterceptor implements HttpInterceptor {

   constructor(
      private globalContextService: GlobalContextService,
      private encryptionService: EncryptionService
   ) { }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = this.globalContextService.getUserToken;

      if (token) {

         request = request.clone({
            setHeaders: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
               'WithCredentials': 'true',
               'Authorization': `Bearer ${token}`,
            },
         });

      } else {

         request = request.clone({
            setHeaders: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
               'WithCredentials': 'false',
            },
         });

      }

      return next.handle(request);

   }

}
