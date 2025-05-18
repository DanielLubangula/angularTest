import { ArticleApi } from './../models/article-api';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: ArticleApi[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async getOneProduct(id: number): Promise<ArticleApi | undefined> {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    let token = localStorage.getItem('token') ?? '';

    try {
      let rep = await fetch('http://localhost:3333/articles/' + id, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => response.json());

      return rep;
    } catch (error) {
      console.error('Erreur lors de la récupération du produit :', error);
      return undefined;
    }
  }

  all(): Promise<ArticleApi[]> {
    if (!isPlatformBrowser(this.platformId)) return Promise.resolve([]);

    let token = this.document.defaultView?.localStorage.getItem('token') ?? '';

    return fetch('http://localhost:3333/articles', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => response.json())
      .catch(error => {
        console.error('Erreur lors de la récupération des articles :', error);
        return [];
      });
  }

  async storeApi(
    title: string,
    description: string,
    price: number,
    category: string,
    image: string,
    rate: number,
    count: number
  ) {
    if (!isPlatformBrowser(this.platformId)) return;

    const article = {
      title,
      price,
      description,
      image,
      category,
      rate,
      count
    };

    let token = localStorage.getItem('token') ?? '';

    try {
      await fetch('http://localhost:3333/articles', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(article)
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'un article :', error);
    }
  }

  async updateApi(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string,
    rate: number,
    count: number
  ) {
    if (!isPlatformBrowser(this.platformId)) return;

    const article = {
      title,
      price,
      description,
      image,
      category,
      rate,
      count
    };

    let token = localStorage.getItem('token') ?? '';

    try {
      await fetch('http://localhost:3333/articles/' + id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(article)
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article :', error);
    }
  }

  async destroyApi(id: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    let token = localStorage.getItem('token') ?? '';

    try {
      await fetch('http://localhost:3333/articles/' + id, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article :', error);
    }
  }
}
