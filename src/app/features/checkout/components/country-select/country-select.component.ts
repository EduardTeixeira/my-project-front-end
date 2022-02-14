import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CountryService } from './../../../../shared/services/country.service';
import { Country } from './../../../../shared/models/country';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  country: string = 'Country';
  countries: Country[] = [];
  @Output() setCountryEvent = new EventEmitter<string>();

  constructor(private countriesServ: CountryService) { }

  ngOnInit() {
    this.countriesServ.getCountries()
      .subscribe(
        countries => {
          this.countries = countries;
        }
      );
  }

  setCountry(value: Country) {
    this.country = value.name || '';
    this.setCountryEvent.emit(value.code);
  }
}
