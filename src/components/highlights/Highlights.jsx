import React from "react";
import {
  HighWrapper,
  HighInner,
  Grid,
  HighCard,
  Title,
  Item,
} from "./HighlightsStyle";

const Highlights = () => {
  return (
    <HighWrapper>
      <HighInner>
        <Grid>
          <HighCard>
            <Title>🖥️ Areas of expertise</Title>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
          </HighCard>
          <HighCard>
            <Title>👩‍💻 Currently learning</Title>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
          </HighCard>
          <HighCard>
            <Title>☕ Personal interests</Title>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
          </HighCard>
          <HighCard>
            <Title>💡Current projects</Title>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
            <Item>Bla bla</Item>
          </HighCard>
        </Grid>
      </HighInner>
    </HighWrapper>
  );
};

export default Highlights;
