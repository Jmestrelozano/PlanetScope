import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createPlanetSlice } from './slices/planetsSlice';
import { createFavoriteSlice } from './slices/favoritesSlice';

import { IUseStore } from './interfaces/store';

export const useStore = create<IUseStore>()(
  persist(
    (set, get) => ({
      ...createPlanetSlice(set, get),
      ...createFavoriteSlice(set, get),
    }),
    {
      name: 'favorite-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ favorites: state.favorites || [] }),
    }
  )
);