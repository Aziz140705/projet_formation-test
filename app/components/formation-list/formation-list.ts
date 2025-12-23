import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../services/formation';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './formation-list.html',
  styleUrl: './formation-list.css'
})
export class FormationListComponent {
  private formationService = inject(FormationService);
  
  // Utilisation des Signals
  formations = this.formationService.filteredFormations;
  searchTerm = this.formationService.searchTerm;

  onSearch(term: string): void {
    this.formationService.searchFormations(term);
  }
}