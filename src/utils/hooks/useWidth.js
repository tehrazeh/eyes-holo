import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const {innerWidth: width} = window;
  return {
    width
  };
}

export default function useWidth() {
  const [width, setWidth] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}