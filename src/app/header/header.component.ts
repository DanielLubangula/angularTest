import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'
// import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink], // Import de RouterLink pour les appeller dans app-header pour mettre des liens dans notre fichier html
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isConnected :boolean = false;
  nom!:string 
  router : Router = inject(Router)

  // constructor(@Inject(PLATFORM_ID) private platformId: object) {} //Vérifie que le code tourne bien dans le navigateur avant d'utiliser localStorage.

  constructor(@Inject(DOCUMENT) private document : Document) {}

  ngOnInit():void{
    if(this.document.defaultView?.localStorage.getItem('token')){
      this.isConnected = true
      this.nom = this.document.defaultView?.localStorage.getItem('nom')??""
    }
  }

  deconnexion(){
    localStorage.clear(); //Nettoyer le localStorage
    this.isConnected = false
    // this.cdr.detectChanges(); // Force Angular à mettre à jour la vue
    this.router.navigate(['/'])
  }

}
