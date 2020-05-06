import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../../services/heroes.service';
import { IHeroe } from '../heroes.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  heroe: IHeroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: radix
      this.heroe = heroesService.getHeroe(Number.parseInt(params.id));
    });
  }

  ngOnInit(): void {
  }

}
