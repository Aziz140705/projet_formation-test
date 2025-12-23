import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  categories = [
    'Développement Web',
    'Design Graphique',
    'Réseaux Informatiques',
    'Bureautique',
    'Management'
  ];
}