import React from "react";
import {
  HobbyWrapper,
  HobbyInner,
  Title,
  Text,
  ImageGridColumn,
  ImageGridRow,
  Image,
} from "./HobbyStyle";

// assets
import Alex from "../../assets/alex.jpg";
import Amazona from "../../assets/amazona.jpg";
import Roz from "../../assets/roz.jpg";
import Kakadu from "../../assets/kakadu.jpg";
import Nimfa from "../../assets/nimfa.jpg";
import Nez from "../../assets/nez.jpg";
import Lory from "../../assets/lory.jpg";
import Rozen from "../../assets/rozen.jpg";

const Hobby = () => {
  return (
    <HobbyWrapper>
      <HobbyInner>
        <Title>📷 Aside from programming...</Title>
        <ImageGridRow>
          <ImageGridColumn>
            <Image src={Alex} />
            <Image src={Amazona} />
            <Image src={Rozen} />
          </ImageGridColumn>
          <ImageGridColumn>
            <Image src={Roz} />
            <Image src={Kakadu} />
            <Image src={Alex} />
          </ImageGridColumn>
          <ImageGridColumn>
            <Image src={Nimfa} />
            <Image src={Nez} />
            <Image src={Lory} />
          </ImageGridColumn>
        </ImageGridRow>
      </HobbyInner>
    </HobbyWrapper>
  );
};

export default Hobby;
