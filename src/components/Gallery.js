import React from 'react';

import ImageSlider from './image_slider';
import { BackButton } from './BackButton';



const Gallery = ( {media} ) => {return (
    <div className="Gallery">
        <ImageSlider media={media} />
        <BackButton />
    </div>
  );
};


export default Gallery;