import React, { useState, useEffect } from "react";
import {
  SlideWrapper,
  SlideInner,
  SlideImageCard,
  SmallImage,
  Modal,
  ModalImage,
  CloseButton,
  Overlay,
  NavigationButton,
} from "./SlideShowStyle";

// Components
import Badges from "../../assets/images/badges.jpg";
import Contact from "../../assets/images/contact.jpg";
import Experience from "../../assets/images/experience.jpg";
import Leading from "../../assets/images/leading.jpg";
import Skill from "../../assets/images/skill-card.jpg";
import Project from "../../assets/images/project-portfolio.jpg";

const imageData = [
  {
    id: 1,
    src: Badges,
    name: "Badges",
    description: "A collection of various achievement badges.",
  },
  {
    id: 2,
    src: Contact,
    name: "Contact",
    description: "Contact details and related information.",
  },
  {
    id: 3,
    src: Experience,
    name: "Experience",
    description: "Showcasing past experiences and career highlights.",
  },
  {
    id: 4,
    src: Leading,
    name: "Leading",
    description: "Leadership initiatives and team projects.",
  },
  {
    id: 5,
    src: Skill,
    name: "Skill Card",
    description: "A portfolio card displaying different skillsets.",
  },
  {
    id: 6,
    src: Project,
    name: "Project Portfolio",
    description: "A gallery of various completed projects.",
  },
];

const ImageCard = ({ image, onClick }) => (
  <SlideImageCard onClick={() => onClick(image)}>
    <SmallImage src={image.src} alt={image.name} />
  </SlideImageCard>
);

const Slideshow = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image) => {
    const index = imageData.findIndex((img) => img.id === image.id);
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % imageData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(imageData[nextIndex]);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(imageData[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      showNext();
    } else if (e.key === "ArrowLeft") {
      showPrev();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div>
      <SlideWrapper>
        <SlideInner>
          {imageData.map((image) => (
            <ImageCard key={image.id} image={image} onClick={openModal} />
          ))}
        </SlideInner>
      </SlideWrapper>

      {selectedImage && (
        <Overlay onClick={closeModal}>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedImage.src} alt={selectedImage.name} />
          </Modal>
          <NavigationButton onClick={showPrev} left>
            &#10094;
          </NavigationButton>
          <NavigationButton onClick={showNext} right>
            &#10095;
          </NavigationButton>
        </Overlay>
      )}
    </div>
  );
};

export default Slideshow;
