import { ArticleApi } from './../models/article-api';
import { Article } from './../models/article';
import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  service:ArticleService = inject(ArticleService)

  articleId = -1
  article!: ArticleApi | undefined
  isOpen:boolean = false; // Proprièté chargé de controler l'ouverture et la fermeture du formulaire
  
  
    // Proprièté chargé de controler le formulaire
    applyForm = new FormGroup ({  // formGroup est une classe qui permet de créer un formulaire, prendre le control d'un formulaire
      title: new FormControl (), // FormControl est une classe qui permet de créer un champ de formulaire, prend le control d'un champ de formulaire
      description: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      image: new FormControl(),
      rate: new FormControl(),
      count: new FormControl()
    })

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.articleId = Number(this.route.snapshot.paramMap.get('id'))

      this.service.getOneProduct(this.articleId).then((data:ArticleApi | undefined) => {
        this.article = data
        
        this.applyForm = new FormGroup ({  
          title: new FormControl (this.article?.title??""), //
          description: new FormControl(this.article?.description??""),
          price: new FormControl(this.article?.price??0),
          category: new FormControl(this.article?.category??""),
          image: new FormControl(this.article?.image??""),
          rate: new FormControl(this.article?.rate??0),
          count: new FormControl(this.article?.count??0)
        })
      })
      
// Remplir préalablement le formulaire pour voir les données s'y trouvant déjà afin de modifier ce que l'on veut modifier
      
    }
  
    edit(){ // Fonction qui permet de sauvegarder les données du formulaire
      this.service.updateApi( // store pour sauvegarder les données
        this.articleId, //L'ID de l'article
        this.applyForm.value.title??"", // ??"" permet de dire si le champ est vide, on met une chaine vide
        this.applyForm.value.description??"", 
        this.applyForm.value.price??0, 
        this.applyForm.value.category??"", 
        this.applyForm.value.image??"", 
        this.applyForm.value.rate??0, 
        this.applyForm.value.count??0
      )
  
    this.isOpen = true; // Fermeture du formulaire
    }
  
    close(){ // Fonction qui permet de fermer le formulaire
      this.isOpen = false;
    }
}
