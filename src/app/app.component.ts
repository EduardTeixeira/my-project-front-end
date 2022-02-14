import { Component } from '@angular/core';

import { GlobalContextService } from './shared/services/global-context.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   isAuthenticated: boolean = false;

   constructor(
      public globalContextService: GlobalContextService
   ) { }

   userIsAuthenticated(): boolean {
      return this.isAuthenticated = !this.isAuthenticated;
   }

}
