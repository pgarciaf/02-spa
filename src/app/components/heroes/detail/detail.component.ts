import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  heroe: any = {};
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
