import { Planet } from "../../../domain/models/Planet";

export const removeFromFavoritesUseCase = (favorites: Planet[], id: string) => {
  return favorites.filter(planet => planet.id !== id);
};