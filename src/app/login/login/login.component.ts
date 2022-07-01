import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SessionService } from './../../shared/services/session.service';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { RecoveryPasswordDialog } from '../recovery-password-dialog/recovery-password-dialog.component';

declare var $: any;

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   });

   private toggleButton: any;
   private sidebarVisible: boolean;
   private nativeElement: Node;

   constructor(
      private element: ElementRef,
      private formBuilder: FormBuilder,
      private authService: AuthenticationService,
      private snackBar: MatSnackBar,
      private session: SessionService,
      private location: Location,
      private dialog : MatDialog,
   ) {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
   }

   ngOnInit() {
      var navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

      setTimeout(function () {
         // after 1000 ms we add the class animated to the login/register card
         $('.card').removeClass('card-hidden');
      }, 700);
   }

   sidebarToggle() {
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      var sidebar = document.getElementsByClassName('navbar-collapse')[0];
      if (this.sidebarVisible == false) {
         setTimeout(function () {
            toggleButton.classList.add('toggled');
         }, 500);
         body.classList.add('nav-open');
         this.sidebarVisible = true;
      } else {
         this.toggleButton.classList.remove('toggled');
         this.sidebarVisible = false;
         body.classList.remove('nav-open');
      }
   }

   login(): void {

      const credentials = this.loginForm.value;

      this.authService.login(credentials.email, credentials.password).subscribe(
         () => {
            this.session.setLoggedInStatus(true);
            this.location.back();
         },
         (err) => {
            this.snackBar.open(
               'Falha na autenticação. Verifique seus dados de login.',
               'Fechar',
               { duration: 6000 }
            );
            this.loginForm.patchValue({ password: '' });
         }
      );
   }

   openDialog(): void {

      const myDialog = this.dialog.open(RecoveryPasswordDialog, {
         maxWidth: 420,
         disableClose: true
      });

      myDialog.afterClosed().subscribe(result => {
         console.log('The dialog was closed...');
      });

   }

}
