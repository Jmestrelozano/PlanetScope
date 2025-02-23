import { Planet } from "../../../domain/models/Planet";

export const addToFavoritesUseCase = (favorites: Planet[], planet: Planet): Planet[] => {
  const isAlreadyFavorite = favorites.some(fav => fav.id === planet.id);
  return isAlreadyFavorite ? favorites : [...favorites, planet];
};