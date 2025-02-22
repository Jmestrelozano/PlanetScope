import {Planet} from '../../domain/models/Planet';
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
  isFavorite: (id: string) => get().favorites.some(fav => fav.id === id),
  addToFavorites: (planet: Planet) =>
    set(state => {
      const isAlreadyFavorite = state.favorites.some(
        fav => fav.id === planet.id,
      );
      if (isAlreadyFavorite) return state;
      return {favorites: [...state.favorites, planet]};
    }),
  removeFromFavorites: (id: string) =>
    set(state => ({
      favorites: state.favorites.filter(planet => planet.id !== id),
    })),
});