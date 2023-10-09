import React, { useEffect, useState } from 'react';
import "../../css/ImageSwitcher.css";
import imagePath2 from "../../assets/img/me-after.svg";

const ImageSwitcher = () => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtEndOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsEndOfPage(isAtEndOfPage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`image-transition ${isEndOfPage ? 'fade-in' : 'fade-out'}`}>
        <img src={imagePath2} alt='my-pic' className='my-image' />
        <h1> Thank for visit !</h1>
      </div>
    </div>
  );
};

export default ImageSwitcher;
