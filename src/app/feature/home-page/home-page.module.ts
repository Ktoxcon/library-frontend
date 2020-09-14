import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-routing.module';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, LoginComponent, AboutComponent],
  imports: [CommonModule, HomePageRoutingModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
