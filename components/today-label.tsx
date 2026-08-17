"use client";

import { useEffect, useState } from "react";

export function TodayLabel() {
  const [label, setLabel] = useState("A day for study");

  useEffect(() => {
    const formatted = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date());
    // Date and locale exist only in the browser; update after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLabel(formatted);
  }, []);

  return label;
}
