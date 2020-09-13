import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class FeatureModule {}
