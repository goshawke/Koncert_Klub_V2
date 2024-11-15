import React, { useEffect, useState } from 'react';
import ImageSlider from './image_slider';
import { BackButton } from './BackButton';
import getPublicMediaUrls from '../helpers/awsS3Helper';

const Gallery = ({ prefix }) => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const urls = await getPublicMediaUrls(prefix);
        setMedia(urls);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching media:', error);
        setIsLoading(false);
      }
    };

    fetchMedia();
  }, [prefix]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }

  return (
    <div className="Gallery">
      <ImageSlider media={media} />
      <BackButton />
    </div>
  );
};

export default Gallery;
