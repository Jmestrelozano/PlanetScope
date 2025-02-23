import { fetchPlanetsUseCase } from '../../../application/useCases/planets/fetchPlanets';
import { getPlanetByIdUseCase } from '../../../application/useCases/planets/getPlanetById';
import { sortPlanetsUseCase } from '../../../application/useCases/planets/sortPlanets';

import {PlanetSlice, PlanetState} from '../interfaces/planetSlice';

export const createPlanetSlice = (
  set: (partialState: | Partial<PlanetSlice> | ((state: PlanetSlice) => Partial<PlanetSlice>)) => void,
  get: () => PlanetSlice,
): PlanetSlice => {
  const updateState = (updates: Partial<PlanetState>) => set({planetState: {...get().planetState, ...updates}});

  return {
    planetState: {
      planets: [],
      isLoading: false,
      hasError: false,
      errorMessage: '',
    },
    sortOrder: 'asc',
    fetchPlanets: async () => {
      set({
        planetState: {
          ...get().planetState,
          isLoading: true,
          hasError: false,
          errorMessage: '',
        },
      });

      updateState({isLoading: true, hasError: false, errorMessage: ''});

      try {
        const planets = await fetchPlanetsUseCase();
        updateState({planets});
      } catch (error) {
        updateState({
          hasError: true,
          errorMessage: error instanceof Error ? error.message : 'There was a problem',
        });
      } finally {
        updateState({isLoading: false});
      }
    },
    getPlanetById: (id: string) => getPlanetByIdUseCase(get().planetState.planets, id),
    sortPlanets: (order: 'asc' | 'desc') => {
      const sortedPlanets = sortPlanetsUseCase(get().planetState.planets,order);
      set({planetState: {...get().planetState, planets: sortedPlanets},sortOrder: order});
    },
  };
};