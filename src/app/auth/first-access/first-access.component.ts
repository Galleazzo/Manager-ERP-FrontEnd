import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-first-access',
  imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
    ],
  templateUrl: './first-access.component.html',
  styleUrl: './first-access.component.css'
})
export class FirstAccessComponent implements OnInit{

  loginForm: FormGroup;
  hidePassword = true;
  errorMessage = '';

  userData: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem("expirationDate");
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const body = {
        "username": this.loginForm.value,
        "password": null
      }
      this.userService.findUserByUsername(body).subscribe((result: any) => {
        this.userData = result;
      })
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  firstAccess() {
    this.router.navigate(["/firstAccess"])
  }

  backToLogin() {
    this.router.navigate(["/login"])
  }
}
