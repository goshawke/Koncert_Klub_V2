import React from 'react';

import ImageSlider from './image_slider';
import { BackButton } from './BackButton';

import getPublicMediaUrls from '../helpers/awsS3Helper';



const Gallery = ( {prefix} ) => {
  const media = getPublicMediaUrls(`media/${prefix}/`);
  
  return (
    <div className="Gallery">
        <ImageSlider media={media} />
        <BackButton />
    </div>
  );
};


export default Gallery;