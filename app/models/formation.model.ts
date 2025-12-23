export enum Niveau {
  Debutant = 'Débutant',
  Intermediaire = 'Intermédiaire',
  Avance = 'Avancé'
}

export interface Formation {
  id?: number;
  titre: string;
  description: string;
  chargeHoraire: number;
  programme: string;
  niveau: Niveau;
  tags: string[];
  categories: string[];
}