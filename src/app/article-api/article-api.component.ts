import { Article } from './../models/article';
import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-article-api',
  imports: [],
  templateUrl: './article-api.component.html',
  styleUrl: './article-api.component.css'
})
export class ArticleApiComponent {
  // service: ArticleService = inject(ArticleService)
  // articles!: Article[]

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.service.all().then((articleApi:Article[]) => { // comme all attend une promess alors on fait .then()
  //     this.service.articles = articleApi
  //     this.articles = this.service.articles
  //   })
  // }
}
