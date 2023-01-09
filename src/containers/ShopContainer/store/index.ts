import create from "zustand";

export interface ShopState {
  isShopCategoriesSidebarOpen: boolean;
  setShopCategoriesSidebarOpen: (isOpen: boolean) => void;
}

export const useShopStore = create<ShopState>((set) => ({
  isShopCategoriesSidebarOpen: false,
  setShopCategoriesSidebarOpen: (isOpen) => set({ isShopCategoriesSidebarOpen: isOpen }),
}));
