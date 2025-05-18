import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ArticleApiComponent } from './article-api/article-api.component';
import { Routes } from '@angular/router';
import { single } from 'rxjs';
import { SingleComponent } from './single/single.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { create } from 'domain';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CreateApiComponent } from './create-api/create-api.component';


export const routes: Routes = [
  {
    path: '', // On définit la route par défaut si nous sommes à la racine
    component: LoginComponent, // On affiche le composant ArticleListComponent
  },
  {
    path: 'articles/:id', // On définit la route pour afficher un article en fonction de son id
    component: SingleComponent
  },
  {
    path: 'about', // On définit la route pour afficher la page "A propos"
    component: AboutComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'articles/edit/:id',
    component: EditComponent
  },
  {
    path: 'articleapi',
    component: ArticleApiComponent
  },
  {
    path: 'createapi',
    component: CreateApiComponent
  },
  {
    path: 'adduser',
    component: AddUserComponent
  },
  {
    path: 'users',
    component : UserListComponent
  },
  {
    path: 'article',
    component : ArticleListComponent,
    canActivate: [AuthGuard]
  }
];
