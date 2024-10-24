import React from "react";
import { Card, CardTitle, CardContent, TechIcons } from "./TechCardStyle";
import PhotoIcon from "../../assets/photo.png";

const TechCard = () => {
  return (
    <Card>
      <CardTitle>FRONTEND</CardTitle>
      <CardContent>
        <TechIcons src={PhotoIcon} alt="Angular" />
        <TechIcons src={PhotoIcon} alt="React" />
        <TechIcons src={PhotoIcon} alt="TypeScript" />
      </CardContent>
    </Card>
  );
};

export default TechCard;
