import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  listHeroes: any[] = [];
  constructor(private heroesService: HeroesService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.listHeroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroes/detail', idx]);
  }


}


export interface IHeroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
