import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe } from "../../interfaces/heroes.interface";
import { HeroesService } from "../../services/heroes.service";
// import { switchMap } from "rxjs";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }`
  ]
})
export class HeroeComponent {

  heroe!:Heroe;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.activatedRoute.params
      .subscribe( ({ id }): void => {
        this.heroesService.getHeroePorId(id)
          .subscribe( heroe => this.heroe = heroe);
    });
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({id}) => this.heroesService.getHeroePorId(id))
    //   )
    //   .subscribe(heroe => this.heroe = heroe);
  }

  regresar(): void{
    this.router.navigate(['/heroes/list']);
  }
}
