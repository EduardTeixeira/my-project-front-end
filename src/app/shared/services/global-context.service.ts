import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class GlobalContextService {

   private userToken: string = '';

   private showMenu: boolean = true;
   private showFooter: boolean = true;

   private myObject = {
      obj: 1
   };
   public objeto = 'Nada';
   private subject = new BehaviorSubject(123);
   objeto$ = this.subject.asObservable();

   constructor(
      private router: Router
   ) { }

   get getUserToken(): string {
      return this.userToken;
   }
   set setUserToken(value: string) {
      this.userToken = value;
   }

   get getShowMenu(): boolean {
      return this.showMenu;
   }
   set setShowMenu(value: boolean) {
      this.showMenu = value;
   }

   get getShowFooter(): boolean {
      return this.showFooter;
   }
   set setShowFooter(value: boolean) {
      this.showFooter = value;
   }

   showHeaderFooter(header: boolean, footer: boolean) {
      this.showMenu = header;
      this.showFooter = footer;
   }

   get getMyObject(): any {
      return this.myObject;
   }
   set setMyObject(value: any) {
      this.myObject = value;
   }

   emitirEvento(value: any) {
      this.subject.next(value);
   }

}
