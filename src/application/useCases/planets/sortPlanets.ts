import {Planet} from '../../../domain/models/Planet';

export const sortPlanetsUseCase = (
  planets: Planet[],
  order: 'asc' | 'desc',
): Planet[] => {
  return [...planets].sort((a, b) =>
    order === 'asc'
      ? a.englishName.localeCompare(b.englishName)
      : b.englishName.localeCompare(a.englishName),
  );
};
