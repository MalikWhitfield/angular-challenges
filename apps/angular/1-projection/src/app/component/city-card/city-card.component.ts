import { Component, OnInit } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      [list]="cities"
      [type]="cardType"
      customClass="bg-light-green"></app-card>
  `,
  standalone: true,
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];
  cardType = CardType.CITY;

  constructor(
    private fakeHttpService: FakeHttpService,
    private store: CityStore,
  ) {}

  ngOnInit(): void {
    this.fakeHttpService.fetchCities$.subscribe((s) => this.store.addAll(s));

    this.store.cities$.subscribe((res) => {
      this.cities = res;
      console.log(this.cities);
    });
  }
}
