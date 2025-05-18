import { User, UserLogin } from './../models/user';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async getAllUsers(): Promise<User[]> {
    if (!isPlatformBrowser(this.platformId)) return [];

    try {
      const rep = await fetch('http://localhost:3333/users')
        .then(response => response.json());

      return rep;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      return [];
    }
  }

  async storeUser(fullName: string, email: string, password: string): Promise<User | undefined> {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    const user = {
      fullName,
      email,
      password
    };

    try {
      const rep = await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => res.json());

      return rep;
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
      return undefined;
    }
  }

  async login(email: string, password: string): Promise<UserLogin | undefined> {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    const user = {
      email,
      password
    };

    try {
      const rep = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => res.json());

      return rep;
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      return undefined;
    }
  }
}
