import { Injectable, signal } from '@angular/core';
import { Formation, Niveau } from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  // Utilisation des Signals (nouveau en Angular v16+)
  formations = signal<Formation[]>([
    {
      id: 1,
      titre: 'Introduction à Angular',
      description: 'Apprenez les bases du framework Angular',
      chargeHoraire: 15,
      programme: 'assets/programmes/angular.pdf',
      niveau: Niveau.Debutant,
      tags: ['angular', 'typescript', 'web'],
      categories: ['Développement Web']
    },
    {
      id: 2,
      titre: 'JavaScript Avancé',
      description: 'Maîtrisez JavaScript moderne',
      chargeHoraire: 20,
      programme: 'assets/programmes/js.pdf',
      niveau: Niveau.Intermediaire,
      tags: ['javascript', 'es6', 'web'],
      categories: ['Développement Web']
    }
  ]);

  // Signal pour la recherche
  searchTerm = signal<string>('');

  // Formations filtrées
  filteredFormations = signal<Formation[]>(this.formations());

  // Méthode de recherche
  searchFormations(term: string): void {
    this.searchTerm.set(term);
    
    if (!term.trim()) {
      this.filteredFormations.set(this.formations());
      return;
    }

    const filtered = this.formations().filter(formation =>
      formation.tags.some(tag => 
        tag.toLowerCase().includes(term.toLowerCase())
      ) ||
      formation.titre.toLowerCase().includes(term.toLowerCase())
    );
    
    this.filteredFormations.set(filtered);
  }

  // Récupérer une formation par ID
  getFormationById(id: number): Formation | undefined {
    return this.formations().find(f => f.id === id);
  }
}