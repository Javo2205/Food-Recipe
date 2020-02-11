import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


import { CardFoodComponent } from './components/food-recipe/card-food/card-food.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { ComidaComponent } from './components/hora-comida/tiempo/tiempo.component';
import { NavbarComponent } from './components/cabezera/navbar/navbar.component';
import { DesayunoComponent } from './components/hora-comida/desayuno/desayuno.component';
import { CenaComponent } from './components/hora-comida/cena/cena.component';
import { ColacionComponent } from './components/hora-comida/colacion/colacion.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NewRecipeComponent } from './components/food-recipe/new-recipe/new-recipe.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'comida', component: ComidaComponent },
  { path: 'desayuno', component: DesayunoComponent},
  { path: 'cena', component: CenaComponent },
  { path: 'colacion', component: ColacionComponent },
  { path: 'receta/crear', component: NewRecipeComponent },
  { path: '**', component: InicioComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CardFoodComponent,
    InicioComponent,
    ComidaComponent,
    NavbarComponent,
    DesayunoComponent,
    CenaComponent,
    ColacionComponent,
    RecetasComponent,
    NewRecipeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
