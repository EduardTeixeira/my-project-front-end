import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PasswordService } from './../../../../shared/services/password.service';

@Component({
   selector: 'app-recovery-password-dialog',
   templateUrl: './recovery-password-dialog.component.html',
   styleUrls: ['./recovery-password-dialog.component.css']
})
export class RecoveryPasswordDialogComponent implements OnInit {

   emailFormControl = new FormControl('', [Validators.required, Validators.email]);

   constructor(
      public dialogRef: MatDialogRef<RecoveryPasswordDialogComponent>,
      private passwordService: PasswordService,
   ) { }

   ngOnInit(): void { }

   sendRecovery(): void {
      // chamar recuperação de senha aqui e no sucesso fechar o dialog...
      this.dialogRef.close();
   }

}
