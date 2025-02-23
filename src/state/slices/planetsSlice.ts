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

    try {
      const api = new PlanetApi();
      const response = await api.fetchPlanets();

      set({
        planetState: {
          ...get().planetState,
          planets: response,
          isLoading: false,
        },
      });
    } catch (error) {
      set({
        planetState: {
          ...get().planetState,
          isLoading: false,
          hasError: true,
          errorMessage:
            error instanceof Error ? error.message : 'there was a problem',
        },
      });
    }
  },
  getPlanetById: (id: string) =>
    get().planetState.planets.find(planet => planet.id === id),
  sortPlanets: (order: 'asc' | 'desc') => {
    const sortedPlanets = [...get().planetState.planets].sort((a, b) =>
      order === 'asc'
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName),
    );
    set({
      planetState: {...get().planetState, planets: sortedPlanets},
      sortOrder: order,
    });
  },
});