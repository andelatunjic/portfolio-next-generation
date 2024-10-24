import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: left;
  border-radius: 8px;
  padding: 20px;
  height: 160px;
  border: 3px solid #ced3e1;
  box-shadow: 4px 4px 0 #ced3e1;
`;

export const CardTitle = styled.p`
  position: absolute;
  left: 0;
  margin-left: 20px;
  font-weight: 500;
  color: #1e1e1e;
  opacity: 0.8;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TechIcons = styled.img`
  width: 40px;
  height: 40px;
`;
