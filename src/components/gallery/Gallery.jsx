import React, { useState } from "react";
import {
  GalleryWrapper,
  GalleryClose,
  GalleryContent,
  MainImageWrapper,
  MainImage,
  Arrow,
  ThumbnailsWrapper,
  Thumbnail,
} from "./GalleryStyle";

const Gallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryWrapper>
      <GalleryClose onClick={onClose}>X</GalleryClose>
      <GalleryContent>
        <MainImageWrapper>
          <Arrow onClick={handlePrev}>{"<"}</Arrow>
          <MainImage
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
          <Arrow onClick={handleNext}>{">"}</Arrow>
        </MainImageWrapper>
        <ThumbnailsWrapper>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              isActive={index === currentIndex}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </ThumbnailsWrapper>
      </GalleryContent>
    </GalleryWrapper>
  );
};

export default Gallery;
