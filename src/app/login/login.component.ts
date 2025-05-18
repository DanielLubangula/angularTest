import { Router } from '@angular/router';
import { UserLogin } from './../models/user';
import { UserService } from './../services/user.service';
import { NgIf } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service: UserService = inject(UserService)
  router : Router = inject(Router)
  isOpen :boolean = false
  user!: UserLogin

  applyForm = new FormGroup ({  
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(@Inject(DOCUMENT) private document : Document) {}

  AuthUser(){
    this.service.login(
      this.applyForm.value.email??"",
      this.applyForm.value.password??""
    ).then((data:any) => {

      
      this.user = data

      if(data.token){
        // Stoker le token et le nom du user dans le navigateur
        this.document.defaultView?.localStorage.setItem('token', data.token.token) // deux params 1 nom de la clé est la valeur du token
        this.document.defaultView?.localStorage.setItem('nom', data.user.fullName)
        this.document.defaultView?.localStorage.setItem('email', data.user.email)

        this.router.navigate(['article']) //Rediriger vers les articles
      } else {
        this.isOpen = true
      }

      
    }).then(() => location.reload()) //lorsque l'on se redirige dans article il va faire une actualisation
  }

  close(){
    this.isOpen = false
  }

}
