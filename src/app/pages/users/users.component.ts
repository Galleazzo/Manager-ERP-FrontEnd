import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users: any[] = [];

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
   this.getUsers()
  }

  getUsers(): void {
    this.usersService.getAllUsers().subscribe((response: any) => {
      this.users = response;
    });
  }

}
