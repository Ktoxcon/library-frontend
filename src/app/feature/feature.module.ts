import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  imports: [CommonModule, HomePageModule, AdminModule],
})
export class FeatureModule {}
