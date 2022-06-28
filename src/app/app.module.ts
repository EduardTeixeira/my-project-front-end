import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './shared/auth/auth.module';

import { AppGuardService } from './app-guard.service';
import { GlobalContextService } from './shared/services/global-context.service';
import { OptionsInterceptor } from './core/interceptors/options.interceptor';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
   declarations: [
      AppComponent,
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
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: OptionsInterceptor,
         multi: true
      },
      AppGuardService,
      GlobalContextService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
