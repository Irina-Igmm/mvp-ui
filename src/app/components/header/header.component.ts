import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title: string = 'Cabinet d\'Étude en Audit Énergétique';
  navLinks: Array<{ label: string, route: string }> = [
    { label: 'Accueil', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Contact', route: '/contact' }
  ];
}