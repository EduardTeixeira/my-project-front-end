import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { GlobalContextService } from './../../shared/services/global-context.service';
import { SessionService } from './../../core/services/session.service';
import { AuthenticationService } from './../../core/services/authentication.service';
import { RecoveryPasswordDialogComponent } from './dialogs/recovery-password-dialog/recovery-password-dialog.component';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   });

   constructor(
      private globalContextService: GlobalContextService,
      private authService: AuthenticationService,
      private session: SessionService,
      private snackBar: MatSnackBar,
      private fb: FormBuilder,
      private location: Location,
      private dialog: MatDialog
   ) {
      this.globalContextService.showHeaderFooter(false, false);
   }

   ngOnInit(): void { }

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

      const myDialog = this.dialog.open(RecoveryPasswordDialogComponent, {
         maxWidth: 420,
         disableClose: true
      });

      myDialog.afterClosed().subscribe(result => {
         console.log('The dialog was closed...');
      });

   }

   editCompanyFormSubmit(email: string): void {

   }

}
