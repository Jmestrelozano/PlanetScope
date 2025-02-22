import {PlanetApi} from '../../infrastructure/api/PlanetApi';
import {PlanetSlice} from '../interfaces/planetSlice';

export const createPlanetSlice = (
  set: (
    partialState:
      | Partial<PlanetSlice>
      | ((state: PlanetSlice) => Partial<PlanetSlice>),
  ) => void,
  get: () => PlanetSlice,
): PlanetSlice => ({
  planets: [],
  fetchPlanets: async () => {
    try {
      const api = new PlanetApi();
      const response = await api.fetchPlanets();

      set({planets: response});
    } catch (error) {
      console.error('Error al obtener planetas:', error);
    }
  },
  getPlanetById: (id: string) => get().planets.find(planet => planet.id === id),
});