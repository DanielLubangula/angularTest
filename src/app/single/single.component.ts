import { ArticleApi } from './../models/article-api';
import { Component, inject } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route:ActivatedRoute = inject(ActivatedRoute) //pour recuperer les parametres dans l'url ne pas oublier articleId
  article!:ArticleApi | undefined //pour recuperer un article
  service:ArticleService = inject(ArticleService)

  articleId =-1  //technique pour recuperer l'ID dans le parametre de l'url

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params['id']) //recuperer l'id de l'article et Number pour le convertir en nombre
    this.service.getOneProduct(this.articleId).then((data:ArticleApi | undefined) => {
      this.article = data
      console.log(this.article)
    }) //recuperer l'article en fonction de l'id this.articles recupere l'ID de l'article s'il on ne retourne rien on retourne undefined
  }
}
