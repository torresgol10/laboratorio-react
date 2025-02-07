import { create } from 'zustand'

type Store = {
  searchStore: string
  updateSearchStore: (newSearchStore) => void
}

export const useStore = create<Store>((set) => ({
  searchStore: "lemoncode",
  updateSearchStore: (newSearch) => set({ searchStore: newSearch  }),
}))

