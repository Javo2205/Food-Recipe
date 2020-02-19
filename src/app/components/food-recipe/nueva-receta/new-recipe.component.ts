import { Component, OnInit } from '@angular/core';
import { Receta } from '../../recetas/recetas';
import { ActivatedRoute, Router } from '@angular/router'
import { RecetaService } from '../../../services/receta.service'
import { RecetaSimple } from '../../recetas/recetasSimple';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  public receta : RecetaSimple = new RecetaSimple();

  constructor( private route: ActivatedRoute,
               private router: Router,
               private recetaService: RecetaService ) { 
               }

  onSubmit(){
    this.recetaService.save(this.receta).subscribe(result => this.irRecetas());
  }

  irRecetas(){
    this.router.navigate(['/recetario']);
  }

  ngOnInit() {
  }

}
