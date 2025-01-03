import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent, // Layout padrão para páginas internas
    canActivate: [AuthGuard], // Protege todas as rotas dentro deste layout
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // Outras rotas internas podem ser adicionadas aqui
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
