import { ArticleApi } from './../models/article-api';
import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink], // Import de ArticleComponent pour les appeller dans app-list-article
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles!:ArticleApi[]  //Pour utiliser l'interface article qui est dans models avec toutes nos variables qui contient un tableau d'où les [] / pour déclarer un tableau en typeScript c'est : nombre : number[] où lettre : string[] 
  

  // On appeler le service pour récupérer les données
  // On injecte le service dans le composant
  service: ArticleService = inject(ArticleService); // On injecte le service dans le composant cette propriété est de type ArticleService qui est le service que l'on a crée

  // Methode permettant d'injecter les données dans la view
  ngOnInit(): void {
    console.log('Bonjour')
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.all().then((data : ArticleApi[]) => {
      this.articles = data
    }) // On récupère tous les produits du fichier service et on les stocke dans la variable articles
  }
}
