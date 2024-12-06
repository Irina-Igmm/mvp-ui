import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      title: 'Audit Énergétique',
      description: 'Analyse complète de votre consommation énergétique',
      icon: 'analytics'
    },
    {
      title: 'Conseil en Efficacité',
      description: 'Recommandations personnalisées pour optimiser votre consommation',
      icon: 'lightbulb'
    },
    {
      title: 'Certification',
      description: 'Accompagnement dans vos démarches de certification énergétique',
      icon: 'verified'
    }
  ];
}
