import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavBrandComponent } from './nav-brand.component';

describe('NavBrandComponent', () => {
   let component: NavBrandComponent;
   let fixture: ComponentFixture<NavBrandComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [NavBrandComponent]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NavBrandComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
