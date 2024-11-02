import React, { useRef, useEffect } from "react";
import Feather from "../../assets/feather.png";
import {
  IntroductionWrapper,
  IntroductionInner,
  Overlay,
  StarCanvas,
  TextWrapper,
  IntroductionTitle,
  AccentText,
  IntroductionSubtitle,
  LinkWrapper,
} from "./IntroductionStyle";

const MovingIcons = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const feathers = [];
    const featherCount = 30;
    const iconImage = new Image();
    iconImage.src = Feather;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFeather = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedY: 0.1 + Math.random() * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: 0.02 * (Math.random() - 0.5),
        size: 30 + Math.random() * 40,
      };
    };

    const updateFeathers = () => {
      for (let i = 0; i < featherCount; i++) {
        const feather = feathers[i];
        feather.y += feather.speedY;
        feather.rotation += feather.rotationSpeed;

        if (feather.y > canvas.height) {
          feather.y = -feather.size;
          feather.x = Math.random() * canvas.width;
        }
      }
    };

    const drawFeathers = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < featherCount; i++) {
        const feather = feathers[i];
        ctx.save();
        ctx.translate(feather.x, feather.y);
        ctx.rotate(feather.rotation);
        ctx.drawImage(
          iconImage,
          -feather.size / 2,
          -feather.size / 2,
          feather.size,
          feather.size
        );
        ctx.restore();
      }
    };

    const animate = () => {
      updateFeathers();
      drawFeathers();
      requestAnimationFrame(animate);
    };

    iconImage.onload = () => {
      for (let i = 0; i < featherCount; i++) {
        feathers.push(createFeather());
      }
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      animate();
    };

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <StarCanvas ref={canvasRef} />;
};

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <MovingIcons />
      <Overlay />
      <IntroductionInner>
        <TextWrapper>
          <IntroductionTitle>
            Hi there, <br /> My name is Anđela and I'm a{" "}
            <AccentText>Frontend Developer</AccentText>
          </IntroductionTitle>
          <div>
            <IntroductionSubtitle>
              Frontend developer at <LinkWrapper>SICK Mobilisis↗</LinkWrapper>
            </IntroductionSubtitle>
            <IntroductionSubtitle>
              Academy Student at <LinkWrapper>Speck↗</LinkWrapper> and{" "}
              <LinkWrapper>Span↗</LinkWrapper>
            </IntroductionSubtitle>
            <IntroductionSubtitle>
              Graduated from <LinkWrapper>FOI↗</LinkWrapper>
            </IntroductionSubtitle>
          </div>
        </TextWrapper>
      </IntroductionInner>
    </IntroductionWrapper>
  );
};

export default Introduction;
