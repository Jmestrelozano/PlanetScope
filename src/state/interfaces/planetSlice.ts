import {Planet} from '../../domain/models/Planet';

export interface PlanetSlice {
  planetState: {
    planets: Planet[];
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
  };
  sortOrder: 'asc' | 'desc';
  fetchPlanets: () => Promise<void>;
  getPlanetById: (id: string) => Planet | undefined;
  sortPlanets: (order: 'asc' | 'desc') => void;
}