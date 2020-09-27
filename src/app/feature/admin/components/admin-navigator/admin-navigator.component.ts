import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'admin-navigator',
  templateUrl: './admin-navigator.component.html',
  styleUrls: ['./admin-navigator.component.scss'],
})
export class AdminNavigatorComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  defaultSections = [
    { name: 'Usuarios', icon: 'account_circle' },
    { name: 'Libros', icon: 'library_books' },
    { name: 'Revistas', icon: 'import_contacts' },
    { name: 'Salir', icon: 'login' },
  ];

  getToolbarItems(): Array<any> {
    return this.defaultSections;
  }
}
