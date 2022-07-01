import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroupDirective, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomerService } from './../../shared/services/customer.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   @ViewChild(FormGroupDirective) sufDirective: FormGroupDirective | undefined;

   signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required]]
   }, { validators: this.matchPasswords });

   constructor(
      private customerService: CustomerService,
      private formBuilder: FormBuilder,
      private snackBar: MatSnackBar,
      private router: Router
   ) { }

   ngOnInit() { }

   matchPasswords(signupGroup: AbstractControl): ValidationErrors | null {
      const password = signupGroup.get('password')?.value;
      const confirmedPassword = signupGroup.get('confirmedPassword')?.value;
      return password == confirmedPassword ? null : { differentPasswords: true };
   }

   get password() { return this.signupForm.get('password'); }

   get confirmedPassword() { return this.signupForm.get('confirmedPassword'); }

   signup() {

      const customer = this.signupForm.value;

      this.customerService.createCustomer(
         customer.email,
         customer.password,
         customer.firstName,
         customer.lastName
      ).subscribe(
         () => {
            this.signupForm.reset();
            this.sufDirective?.resetForm();

            this.snackBar.open('Account successfully created. You will be redirected in 5 seconds.', 'Close', { duration: 5000 });

            setTimeout(() => this.router.navigateByUrl('/'), 6000);
         },
         (err) => {
            this.snackBar.open('There was a problem creating your account.', 'Close', { duration: 5000 })
         }
      );

   }

}
