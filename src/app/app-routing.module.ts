import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { FirstAccessComponent } from './auth/first-access/first-access.component';
import { AnaminesisFormComponent } from './pages/anaminesis-form/anaminesis-form.component';
import { AnaminesisViewComponent } from './pages/anaminesis-form/anaminesis-view/anaminesis-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'firstAccess', component: FirstAccessComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'anamnesis', component: AnaminesisFormComponent },
      { path: 'anamnesis/:id', component: AnaminesisViewComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
