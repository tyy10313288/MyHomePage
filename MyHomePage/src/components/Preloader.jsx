import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader" style={{ opacity: isVisible ? 1 : 0 }}>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;