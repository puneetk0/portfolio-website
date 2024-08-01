// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      const allImagesLoaded = Array.from(images).every(img => img.complete);
      
      if (allImagesLoaded) {
        window.scrollTo(0, 0);
      } else {
        setTimeout(checkImagesLoaded, 100); // Check every 100ms until all images are loaded
      }
    };

    checkImagesLoaded();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
