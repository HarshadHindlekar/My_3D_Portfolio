import React, { useEffect, useState } from 'react';
import "../../css/ImageSwitcher.css";
import imagePath2 from "../../assets/img/me-after.svg";
import imagepath1 from "../../assets/img/me-before.svg";


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
      <div className={`image-transition ${isEndOfPage ? 'fade-out' : 'fade-in'}`}>
        <img src={imagepath1} alt='my-pic-old' className='my-image-old' />
      </div>
    </div>
  );
};

export default ImageSwitcher;
