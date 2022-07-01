import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ItemQuantityComponent } from './item-quantity/item-quantity.component';
import { TitleComponent } from './title/title.component';
import { SimplePageComponent } from './simple-page/simple-page.component';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

const components = [
   TopMenuComponent,
   TitleComponent,
   SimplePageComponent,
   SideMenuComponent,
   PageNotFoundComponent,
   FooterComponent,
   ItemQuantityComponent,
   SidebarComponent,
   NavbarComponent,
   HeaderComponent
];

@NgModule({
   imports: [
      CommonModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatMenuModule,
      RouterModule,
   ],
   declarations: [
      ...components
   ],
   exports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      MatTooltipModule,
      ...components
   ],
   schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
