import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  faqs = [
    {
      question: 'Combien coûte un audit énergétique ?',
      answer: 'Le coût d\'un audit énergétique varie selon la taille et la complexité de votre infrastructure. Nous proposons des devis personnalisés après une première consultation.'
    },
    {
      question: 'Combien de temps prend un audit ?',
      answer: 'La durée d\'un audit peut varier de quelques heures à plusieurs jours, selon l\'envergure de votre projet. Nous vous fournirons un planning détaillé lors de notre premier échange.'
    },
    {
      question: 'Quels sont les avantages d\'un audit énergétique ?',
      answer: 'Un audit énergétique permet de réduire vos consommations, diminuer vos coûts, améliorer votre empreinte carbone et identifier des opportunités d\'optimisation.'
    }
  ];

  expandedFAQ: number | null = null;

  onSubmit() {
    console.log('Form submitted', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
    // Logique d'envoi de formulaire
  }

  toggleFAQ(index: number) {
    this.expandedFAQ = this.expandedFAQ === index ? null : index;
  }
}
