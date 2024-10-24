import styled from "styled-components";

export const GalleryWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-direction: column;
`;

export const GalleryClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  color: #9f9d9c;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease-out;

  &:hover {
    color: white;
  }
`;

export const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainImage = styled.img`
  max-width: 80vw;
  max-height: 70vh;
`;

export const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 48px;
  font-weight: 600;
  cursor: pointer;
  padding: 20px;
  color: #9f9d9c;
  cursor: pointer;
  transition: color 0.3s ease-out;

  &:hover {
    color: white;
  }
`;

export const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  overflow-x: auto;
  padding: 10px;
  width: 80vw;

  ::-webkit-scrollbar {
    height: 22px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1e1e1e;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #1e1e1e;
  }

  ::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  scrollbar-width: thin;
  scrollbar-color: #9f9d9c #1e1e1e;
`;

export const Thumbnail = styled.img`
  height: 80px;
  margin: 0 5px;
  cursor: pointer;
  border: ${(props) => (props.isActive ? "4px solid #e8658f" : "none")};

  &:hover {
    border: 2px solid #e8658f;
  }
`;
