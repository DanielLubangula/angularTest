import { ArticleApi } from './../models/article-api';

import { Component, inject, Input } from '@angular/core';
// import { Article } from '../models/article';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input() article!:ArticleApi 
  
  //Pour utiliser l'interface Article qui est dans models avec toutes nos variables @input importe article se trouvant dans article-list.html
  service: ArticleService = inject(ArticleService)

  //Fonction qui va appeler (destroy dans service/article.service.ts) pour supprimer dans le tableau
  delete(id:number){
    if(confirm('voulez-vous supprimer cette article ?')) {
      this.service.destroyApi(id)
    }
  }


}
