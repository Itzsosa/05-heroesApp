import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from "./pages/list/list.component";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'agregar', component: AgregarComponent},
      {path: 'editar/:id', component: AgregarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: ':id', component: HeroeComponent},
      {path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule{
}
