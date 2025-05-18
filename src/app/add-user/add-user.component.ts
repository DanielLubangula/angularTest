import { NgIf } from '@angular/common';
import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  service: UserService = inject(UserService)

  isOpen : boolean = false

  applyForm = new FormGroup ({  
    fullName: new FormControl(''), 
    email: new FormControl(''),
    password: new FormControl('')
  })

  save(){
    this.service.storeUser(
      this.applyForm.value.fullName??"",
      this.applyForm.value.email??"", 
      this.applyForm.value.password??""
    ).then((data:any) => {
      this.service.users.unshift(data)
    })

    this.applyForm = new FormGroup ({  
      fullName: new FormControl(''),  
      email: new FormControl(''),
      password: new FormControl('') 
    })
  
    this.isOpen = true;
  }

  close(){
    this.isOpen = false
  }

}
