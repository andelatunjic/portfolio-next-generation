import { TagText, TagWrapper } from "./TagStyle";

const Tag = ({ tag }) => {
  return (
    <TagWrapper>
      <TagText>{tag}</TagText>
    </TagWrapper>
  );
};

export default Tag;
