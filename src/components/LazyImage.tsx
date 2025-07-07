import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, className = '', ...props }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    effect="blur"
    className={className}
    {...props}
  />
);

export default LazyImage; 