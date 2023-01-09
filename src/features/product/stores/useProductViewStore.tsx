import create from "zustand";

export interface ProductViewState {
  selectedVariantId: number | undefined;
  selectedAttributes: Record<number, number>;
  setSelectedVariantId: (variantId: number | undefined) => void;
  setSelectedAttributes: (attributes: Record<number, number>) => void;
}

export const useProductViewStore = create<ProductViewState>((set) => ({
  selectedVariantId: undefined,
  selectedAttributes: {},
  setSelectedVariantId: (variantId) => set({ selectedVariantId: variantId }),
  setSelectedAttributes: (attributes) => set({ selectedAttributes: attributes }),
}));
