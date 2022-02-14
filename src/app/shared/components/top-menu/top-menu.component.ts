import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalContextService } from './../../services/global-context.service';

@Component({
   selector: 'app-top-menu',
   templateUrl: './top-menu.component.html',
   styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

   constructor(
      private router: Router,
      private globalContextService: GlobalContextService,
   ) { }

   ngOnInit() {
   }

   testeRota() {
      console.log('testeRota...');
      // this.router.navigateByUrl('/private');
      this.router.navigate(['/private']);
   }

}
