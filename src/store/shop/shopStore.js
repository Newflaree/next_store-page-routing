// Zustand
import { create } from 'zustand';


export const useShopStore = create( (set) => ({
  isPricesHidden: false,

  hiddenPrices: () => set({ isPricesHidden: true }),
  showPrices: () => set({ isPricesHidden: false }),
}));
