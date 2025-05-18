import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Vérifie si le token existe dans le stockage local

    if (token) {
      return true; // Autorise l'accès
    } else {
      this.router.navigate(['/']); // Redirige vers la page de connexion
      return false;
    }
  }
}
