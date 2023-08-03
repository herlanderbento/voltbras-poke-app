import { useEffect, useState } from "react";
import { LazyImageSpinner } from "./Spinner";

type LazyImageProps = {
  src: string;
  alt: string;
};

export function LazyImage({ src, alt }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.onload = () => setIsLoaded(true);
  }, [alt, src]);

  if (!isLoaded) {
    return <LazyImageSpinner />;
  }

  return <img src={src} alt={alt} className="image" />;
}
