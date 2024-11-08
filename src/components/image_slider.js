import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ media=[] }) => {
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const isVideo = (file) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some((ext) => file.toLowerCase().endsWith(ext));
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {media.map((src, index) => (
          <div key={index}>
            {isVideo(src) ? (
                        <video controls style={{ width: '100%' }}>
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={src} alt={`Media ${index}`} />
                    )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;