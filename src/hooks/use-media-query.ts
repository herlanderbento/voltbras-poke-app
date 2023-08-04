import { useLayoutEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const mediaMatch = window?.matchMedia(query);
      
      setMatches(mediaMatch.matches);

      const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

      mediaMatch.addEventListener("change", handler);

      return () => mediaMatch.removeEventListener("change", handler);
    }
  }, [query]);

  return matches;
};




























// // import { useState, useEffect, useLayoutEffect } from 'react';

// export default function useMediaQuery(query: string): boolean {
//   const [matches, setMatches] = useState(false);

//   useLayoutEffect(() => {
//     const updateMatches = () => {
//       if (typeof window !== 'undefined') {
//         const mediaMatch = window.matchMedia(query);
//         setMatches(mediaMatch.matches);
//       }
//     };

//     updateMatches();

//     if (typeof window !== 'undefined') {
//       const mediaQueryList = window.matchMedia(query);
//       const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
//       mediaQueryList.addListener(listener);
//       return () => mediaQueryList.removeListener(listener);
//     }
//   }, [query]);

//   return matches;
// }
