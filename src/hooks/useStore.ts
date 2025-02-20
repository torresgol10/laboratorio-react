import { useContext } from "react";
import { Store, StoreContext } from "../context";


export const useStore = (): Store => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};