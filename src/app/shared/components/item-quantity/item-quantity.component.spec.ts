/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemQuantityComponent } from './item-quantity.component';

describe('ItemQuantityComponent', () => {
   let component: ItemQuantityComponent;
   let fixture: ComponentFixture<ItemQuantityComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ItemQuantityComponent]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ItemQuantityComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
