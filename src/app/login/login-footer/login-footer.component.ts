import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-login-footer',
   templateUrl: './login-footer.component.html',
   styleUrls: ['./login-footer.component.scss']
})
export class LoginFooterComponent implements OnInit {

   test: Date = new Date();

   constructor() { }

   ngOnInit(): void { }

}
