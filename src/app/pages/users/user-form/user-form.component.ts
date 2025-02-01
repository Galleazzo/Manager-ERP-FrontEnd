import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule], 
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      var newUser = {
        username: this.userForm.value.username,
        password: null,
        roles: null
      }
      this.userService.createUser(newUser).subscribe(() => {
        alert('Usuário cadastrado com sucesso!');
        this.goToUserList();
      });
    }
  }

  goToUserList(): void {
    this.router.navigate(['/users']);
  }
}
