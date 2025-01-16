import { Component } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private usersService: UserService){}

  get() {
    this.usersService.getAllUsers().subscribe((response: any) => {
      console.log(response);
      
    })
  }

}
