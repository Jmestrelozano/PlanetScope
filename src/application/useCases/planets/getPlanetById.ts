import { Planet } from "../../../domain/models/Planet";

export const getPlanetByIdUseCase = (planets: Planet[], id: string): Planet | undefined => {
  return planets.find(planet => planet.id === id);
};