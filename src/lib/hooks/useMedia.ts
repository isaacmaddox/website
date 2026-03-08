"use client";

import { useEffect, useState } from "react";

export function useMedia(query: string) {
   const [matches, setMatches] = useState(false);

   useEffect(() => {
      if (typeof window === undefined) return;

      const mediaQuery = window.matchMedia(query);

      const handleMediaQueryChange = ({ matches }: { matches: boolean }) => setMatches(matches);

      handleMediaQueryChange({ matches: mediaQuery.matches });

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
   }, [query]);

   return matches;
}
