import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { GlobalContextService } from './../../shared/services/global-context.service';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   constructor(
      public globalContextService: GlobalContextService
   ) {
      this.globalContextService.showHeaderFooter(true, true);
   }

   ngOnInit() {
   }

   teste() {
      // this.globalContextService.setMyObject({ obj: 1 });
      this.globalContextService.objeto = 'puisdfsdf';
   }

}
