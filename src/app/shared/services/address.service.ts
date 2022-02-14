import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Address } from '../../shared/models/address';
import { HttpErrorHandlerService } from 'src/app/shared/services/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url: string = `${environment.API_ENDPOINT}/api/addresses`;

  constructor(
    private http: HttpClient,
    private eh: HttpErrorHandlerService
  ) { }

  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.url, address)
      .pipe(catchError(this.eh.handleError));
  }

  getAddress(id: string): Observable<Address> {
    return this.http.get<Address>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

}
