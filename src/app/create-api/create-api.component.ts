import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ArticleApi } from '../models/article-api';
import { Article } from '../models/article';

@Component({
  selector: 'app-create-api',
  imports: [ReactiveFormsModule],
  templateUrl: './create-api.component.html',
  styleUrl: './create-api.component.css'
})
export class CreateApiComponent {
  // service:ArticleService = inject(ArticleService)
  
  //   isOpen:boolean = false; // Proprièté chargé de controler l'ouverture et la fermeture du formulaire
  //   article!:Article
  
  //   // Proprièté chargé de controler le formulaire
  //   applyForm = new FormGroup ({  // formGroup est une classe qui permet de créer un formulaire, prendre le control d'un formulaire
  //     title: new FormControl(''), // FormControl est une classe qui permet de créer un champ de formulaire, prend le control d'un champ de formulaire
  //     description: new FormControl(''),
  //     price: new FormControl(0), // 0 parce que c'est un nombre
  //     category: new FormControl(''),
  //     image: new FormControl(''),
  //   })
  
  //   save(){ // Fonction qui permet de sauvegarder les données du formulaire
  //     this.service.storeApi( // store pour sauvegarder les données
  //       this.applyForm.value.title??"", // ??"" permet de dire si le champ est vide, on met une chaine vide
  //       this.applyForm.value.description??"", 
  //       this.applyForm.value.price??0, 
  //       this.applyForm.value.category??"", 
  //       this.applyForm.value.image??"", 
  //     ).then((articleApi:ArticleApi) => {
  //       this.article = {
  //         ...articleApi, 
  //         rating:{
  //           rate:0,
  //           count:0
  //         }
  //       }
  //       this.service.articles.unshift(this.article)
  //     })
  
  //     // Remise à zéro du formulaire
  //   this.applyForm = new FormGroup ({  // formGroup est une classe qui permet de créer un formulaire, prendre le control d'un formulaire
  //     title: new FormControl(''), // FormControl est une classe qui permet de créer un champ de formulaire, prend le control d'un champ de formulaire
  //     description: new FormControl(''),
  //     price: new FormControl(0), // 0 parce que c'est un nombre
  //     category: new FormControl(''),
  //     image: new FormControl(''),
  //   })
  
  //   this.isOpen = true; // Fermeture du formulaire
  //   }
  
  //   close(){ // Fonction qui permet de fermer le formulaire
  //     this.isOpen = false;
  //   }
}
