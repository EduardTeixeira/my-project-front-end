import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
   selector: 'app-lock',
   templateUrl: './lock.component.html',
   styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {

   test: Date = new Date();

   constructor() { }

   ngOnInit() {
      setTimeout(function () {
         // after 1000 ms we add the class animated to the login/register card
         $('.card').removeClass('card-hidden');
      }, 700);
   }

}
