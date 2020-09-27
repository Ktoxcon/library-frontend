import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminNavigatorComponent } from './components/admin-navigator/admin-navigator.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';

@NgModule({
  declarations: [AdminComponent, AdminNavigatorComponent, AdminSectionComponent],
  imports: [CommonModule, SharedModule],
  exports: [AdminComponent],
})
export class AdminModule {}
