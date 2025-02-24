import { Planet } from '../../../domain/models/Planet';

import { addToFavoritesUseCase } from '../../../application/useCases/favorites/addToFavorites';
import { isFavoriteUseCase } from '../../../application/useCases/favorites/isFavorite';
import { removeFromFavoritesUseCase } from '../../../application/useCases/favorites/removeFromFavorites';

import {FavoriteSlice} from '../interfaces/favoriteSlice';

export const createFavoriteSlice = (
  set: (
    partialState:
      | Partial<FavoriteSlice>
      | ((state: FavoriteSlice) => Partial<FavoriteSlice>),
  ) => void,
  get: () => FavoriteSlice,
): FavoriteSlice => ({
  favorites: [],
  isFavorite: (id: string) => isFavoriteUseCase(get().favorites, id),
  addToFavorites: (planet: Planet) =>
    set(state => ({favorites: addToFavoritesUseCase(state.favorites, planet)})),
  removeFromFavorites: (id: string) =>
    set(state => ({
      favorites: removeFromFavoritesUseCase(state.favorites, id),
    })),
});