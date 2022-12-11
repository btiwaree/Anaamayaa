import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/detox.jpg',
  },
  {
    original: '/panchakarma.jpg',
  },
];

export const Slider = () => {
  return <ImageGallery items={images} showPlayButton={false} autoPlay showThumbnails={false} />;
};
