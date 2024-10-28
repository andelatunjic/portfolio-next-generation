import {
  CertificatesWrapper,
  CertificatesInner,
  CertificatesList,
  Thumbnail,
  Title,
} from "./CertificatesStyle";

import InventoryList from "../../assets/inventory-list.png";
import InventoryLogin from "../../assets/inventory-login.png";

const Certificates = () => {
  const certificates = [
    InventoryList,
    InventoryLogin,
    InventoryList,
    InventoryLogin,
    InventoryList,
    InventoryLogin,
    InventoryList,
    InventoryLogin,
  ];

  return (
    <CertificatesWrapper>
      <CertificatesInner>
        <Title>Certificates & Academy diplomas</Title>
        <CertificatesList>
          {certificates.map((image, index) => (
            <Thumbnail key={index} src={image} />
          ))}
        </CertificatesList>
      </CertificatesInner>
    </CertificatesWrapper>
  );
};

export default Certificates;
