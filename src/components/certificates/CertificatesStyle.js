import styled from "styled-components";

export const CertificatesWrapper = styled.div`
  margin: 64px 0;
`;

export const CertificatesInner = styled.div``;

export const CertificatesList = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 22px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  scrollbar-width: thin;
  scrollbar-color: #ced3e1 #fff;
`;

export const Thumbnail = styled.img`
  height: 240px;
  margin: 0 5px;
`;

export const Title = styled.h2`
  line-height: 38px;
  margin-bottom: 24px;
`;
