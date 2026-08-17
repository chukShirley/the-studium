"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialStudyState, storageKey, type StudyState } from "@/lib/study-state";

type StudyContextValue = {
  state: StudyState;
  ready: boolean;
  update: (patch: Partial<StudyState>) => void;
  reset: () => void;
};

const StudyContext = createContext<StudyContextValue | null>(null);

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialStudyState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        // Hydration must begin from the server-safe default; restore browser state after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState({ ...initialStudyState, ...JSON.parse(saved) });
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [ready, state]);

  const value = useMemo(
    () => ({
      state,
      ready,
      update: (patch: Partial<StudyState>) => setState((current) => ({ ...current, ...patch })),
      reset: () => setState(initialStudyState),
    }),
    [ready, state],
  );

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>;
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (!context) throw new Error("useStudy must be used inside StudyProvider");
  return context;
}
