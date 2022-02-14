import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { GlobalContextService } from './../../shared/services/global-context.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
   public globalContextService: GlobalContextService
  ) { }

  ngOnInit() {
  }

}
