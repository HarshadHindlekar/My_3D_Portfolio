import React from 'react';
import "../../css/ImageSwitcher.css";
import imagePath2 from "../../assets/img/me-after.svg";
import TrackVisibility from 'react-on-screen';

const ImageSwitcher = () => {

  return (
    <div>
       <TrackVisibility partialVisibility>
       {({ isVisible }) =>
       <div className={`image-transition ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <img src={imagePath2} alt='my-pic' className='my-image' />
        <h1 className='animate-charcter'> Thank for visit !</h1>
      </div>}
       </TrackVisibility>
     
    </div>
  );
};

export default ImageSwitcher;
