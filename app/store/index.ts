import { create } from 'zustand'
type Store = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (payload) => set({ isLoading: payload })
}));