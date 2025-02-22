import {Planet} from '../../domain/models/Planet';

export interface FavoriteSlice {
  favorites: Planet[];
  isFavorite: (id: string) => boolean;
  addToFavorites: (planet: Planet) => void;
  removeFromFavorites: (id: string) => void;
}