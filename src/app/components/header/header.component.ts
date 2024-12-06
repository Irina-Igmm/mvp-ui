// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Cabinet d\'Étude en Audit Énergétique';

  navLinks: Array<{
    label: string,
    route: string,
    icon: string
  }> = [
    { label: 'Accueil', route: '/', icon: 'home' },
    { label: 'Contact', route: '/contact', icon: 'contact_mail' }
  ];
}
