import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { count } from 'console';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  service:ArticleService= inject(ArticleService)

  isOpen:boolean = false; // Proprièté chargé de controler l'ouverture et la fermeture du formulaire


  // Proprièté chargé de controler le formulaire
  applyForm = new FormGroup ({  // formGroup est une classe qui permet de créer un formulaire, prendre le control d'un formulaire
    title: new FormControl(''), // FormControl est une classe qui permet de créer un champ de formulaire, prend le control d'un champ de formulaire
    description: new FormControl(''),
    price: new FormControl(0), // 0 parce que c'est un nombre
    category: new FormControl(''),
    image: new FormControl(''),
    rate: new FormControl(0),
    count: new FormControl(0)
  })

  save(){ // Fonction qui permet de sauvegarder les données du formulaire
    this.service.storeApi( // store pour sauvegarder les données
      this.applyForm.value.title??"", // ??"" permet de dire si le champ est vide, on met une chaine vide
      this.applyForm.value.description??"", 
      this.applyForm.value.price??0, 
      this.applyForm.value.category??"", 
      this.applyForm.value.image??"", 
      this.applyForm.value.rate??0, 
      this.applyForm.value.count??0
    )

    // Remise à zéro du formulaire
  this.applyForm = new FormGroup ({  // formGroup est une classe qui permet de créer un formulaire, prendre le control d'un formulaire
    title: new FormControl(''), // FormControl est une classe qui permet de créer un champ de formulaire, prend le control d'un champ de formulaire
    description: new FormControl(''),
    price: new FormControl(0), // 0 parce que c'est un nombre
    category: new FormControl(''),
    image: new FormControl(''),
    rate: new FormControl(0),
    count: new FormControl(0)
  })

  this.isOpen = true; // Fermeture du formulaire
  }

  close(){ // Fonction qui permet de fermer le formulaire
    this.isOpen = false;
  }
}
