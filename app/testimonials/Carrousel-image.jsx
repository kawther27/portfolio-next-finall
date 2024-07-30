import React from 'react';

const CarouselImage = ({ src, alt }) => (
  <img
    className="d-block w-100 "
    src={src}
    alt={alt}
    style={{ objectFit: 'cover' }}
  />
);

export default CarouselImage;

