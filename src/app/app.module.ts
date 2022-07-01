import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './shared/auth/auth.module';
import { GlobalContextService } from './shared/services/global-context.service';
import { SharedComponentsModule } from './shared/components/shared-components.module';

import { AppInterceptor } from './app.interceptor';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppGuardService } from './app-guard.service';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';

@NgModule({
   declarations: [
      AppComponent,
      AdminLayoutComponent,
      AuthLayoutComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      AuthModule,
      AppRoutingModule,
      SharedComponentsModule,
      SharedPipesModule
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AppInterceptor,
         multi: true
      },
      AppGuardService,
      GlobalContextService,
   ],
   bootstrap: [AppComponent],
   schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
