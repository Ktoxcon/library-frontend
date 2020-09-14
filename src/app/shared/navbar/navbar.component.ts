import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  defaultSections = [
    { name: 'Inicio', link: '', icon: 'home' },
    { name: 'Ingresar', link: 'login', icon: 'login' },
    { name: 'Acerca De', link: 'about', icon: 'info' },
  ];

  getToolbarItems(): Array<any> {
    return this.defaultSections;
  }
}
