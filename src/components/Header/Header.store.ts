import create from "zustand";

export interface HeaderState {
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isDesktopMenuOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
  setIsMobileMenuOpen: (value: boolean) => void;
  setIsDesktopMenuOpen: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isSearchOpen: false,
  isMobileMenuOpen: false,
  isDesktopMenuOpen: false,
  setIsSearchOpen: (value) => set({ isSearchOpen: value }),
  setIsMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
  setIsDesktopMenuOpen: (value) => set({ isDesktopMenuOpen: value }),
}));
