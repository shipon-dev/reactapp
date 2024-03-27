import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ColorStore {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const useMultipleColor = create<ColorStore>()(
  persist(
    (set, get) => ({
      selectedColor: "#3C80F6",
      setSelectedColor: (color: string) => set({ selectedColor: color }),
    }),
    {
      name: "color",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useMultipleColor;
