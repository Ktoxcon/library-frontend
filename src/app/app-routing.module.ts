import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './feature/admin/admin.component';
import { AboutComponent } from './feature/home-page/components/about/about.component';
import { LoginComponent } from './feature/home-page/components/login/login.component';
import { HomePageComponent } from './feature/home-page/home-page.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
