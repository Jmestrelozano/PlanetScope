import { Planet } from "../../../domain/models/Planet";

export const isFavoriteUseCase = (favorites: Planet[], id: string): boolean => {
  return favorites.some(fav => fav.id === id);
};