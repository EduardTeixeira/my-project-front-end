import { Component } from '@angular/core';

import { GlobalContextService } from './../../services/global-context.service';

@Component({
   selector: 'app-page-not-found',
   templateUrl: './page-not-found.component.html',
   styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

   constructor(
      private globalContextService: GlobalContextService
   ) {
      this.globalContextService.showHeaderFooter(false, false);
   }

}
