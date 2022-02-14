import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './shared/auth/auth.module';
import { PageNotFoundModule } from './shared/components/page-not-found/page-not-found.module';
import { TopMenuModule } from './shared/components/top-menu/top-menu.module';
import { FooterModule } from './shared/components/footer/footer.module';

import { AppGuardService } from './app-guard.service';
import { GlobalContextService } from './shared/services/global-context.service';
import { OptionsInterceptor } from './core/interceptors/options.interceptor';

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
      PageNotFoundModule,
      AppRoutingModule,
      TopMenuModule,
      FooterModule,
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
