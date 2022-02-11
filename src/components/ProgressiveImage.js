import React, { useState, useEffect } from "react";

function ProgressiveImage({
  src,
  placeholderSrc,
  alt,
  className,
  style,
  onClick,
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (hasLoaded) return;
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => setHasLoaded(true);
  }, [src]);

  return (
    <img
      src={hasLoaded ? src : placeholderSrc}
      alt={alt}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
}

export default ProgressiveImage;
