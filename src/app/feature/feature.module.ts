import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  imports: [CommonModule, HomePageModule],
})
export class FeatureModule {}
