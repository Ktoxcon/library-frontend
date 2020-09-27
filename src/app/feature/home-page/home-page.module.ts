import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
