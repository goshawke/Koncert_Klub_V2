import React from 'react';

import ImageSlider from './image_slider';
import { BackButton } from './BackButton';



const Gallery = ( {images} ) => {return (
    <div className="Gallery">
        <ImageSlider images={images} />
        <BackButton />
    </div>
  );
};


export default Gallery;