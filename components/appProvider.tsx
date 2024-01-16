"use client";

import { AppContextState, TAppContext } from "@/types";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext<TAppContext | null>(null);

interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props) {
  const [state, setState] = useState<AppContextState>({
    open: true,
  });

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext) as TAppContext;
