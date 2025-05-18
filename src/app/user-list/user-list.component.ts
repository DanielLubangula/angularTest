import { UserComponent } from './../user/user.component';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink, NgForOf, UserComponent ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users !: User[]
  service: UserService = inject(UserService)

  ngOnInit():void {
    this.service.getAllUsers().then((data:User[]) => {
      this.service.users = data
      this.users = this.service.users
    })
  }

}
