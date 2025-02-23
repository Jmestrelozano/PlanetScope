import { PlanetApi } from "../../../infrastructure/api/PlanetApi";
import { Planet } from "../../../domain/models/Planet";

export const fetchPlanetsUseCase = async (): Promise<Planet[]> => {
  const api = new PlanetApi();
  return api.fetchPlanets();
};