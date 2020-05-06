import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroe } from '../../heroes/heroes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroesArr: IHeroe[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searchHeroe(valor: string){
    this.heroesArr = this.heroesService.searchHeroe(valor);
    console.log(this.heroesArr);
  }

}
