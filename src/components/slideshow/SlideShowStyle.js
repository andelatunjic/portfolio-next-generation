import styled from "styled-components";
import { colors } from "../../utils/theme";

export const SlideWrapper = styled.div`
  overflow: hidden;
`;

export const SlideInner = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-bottom: 54px;
`;

export const SlideImageCard = styled.div`
  cursor: pointer;
`;

export const SmallImage = styled.img`
  width: auto;
  height: 120px;
`;

export const Modal = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 32px;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 20px;" : "")}
  ${({ right }) => (right ? "right: 20px;" : "")}
  transform: translateY(-50%);
  background: transparent;
  color: white;
  font-size: 48px;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
`;
