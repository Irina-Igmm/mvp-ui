import { Component, OnInit } from '@angular/core';

// home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    {
      title: 'Audit Énergétique',
      description: 'Analyse approfondie de votre consommation et potentiel d\'économies',
      icon: 'analytics'
    },
    {
      title: 'Conseil en Efficacité',
      description: 'Recommandations stratégiques et personnalisées pour réduire vos coûts',
      icon: 'lightbulb'
    },
    {
      title: 'Certification',
      description: 'Accompagnement expert dans vos démarches de certification énergétique',
      icon: 'verified'
    }
  ];

  processSteps = [
    {
      title: 'Diagnostic Initial',
      description: 'Évaluation complète de votre infrastructure et consommation énergétique'
    },
    {
      title: 'Analyse Détaillée',
      description: 'Identification précise des axes d\'amélioration et potentiels d\'économies'
    },
    {
      title: 'Recommandations',
      description: 'Propositions de solutions sur-mesure adaptées à vos besoins spécifiques'
    },
    {
      title: 'Mise en Œuvre',
      description: 'Accompagnement dans l\'implémentation de vos solutions énergétiques'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic can be added here
  }

  // Optional: Add methods for interaction with sidebar elements
  onQuickLinkClick(link: string) {
    // Handle quick link clicks
    console.log(`Clicked: ${link}`);
  }
}
