import {Planet} from '../../domain/models/Planet';

export interface PlanetSlice {
  planets: Planet[];
  fetchPlanets: () => Promise<void>;
  getPlanetById: (id: string) => Planet | undefined;
}