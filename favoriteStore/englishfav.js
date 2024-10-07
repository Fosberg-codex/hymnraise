import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useEnglishfavStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (hymn) => set((state) => ({
        favorites: [...state.favorites, hymn]
      })),
      removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter(fav => fav.id !== id)
      })),
      isFavorite: (id) => get().favorites.some(fav => fav.id === id),
    }),
    {
      name: 'Englishfav-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useEnglishfavStore;