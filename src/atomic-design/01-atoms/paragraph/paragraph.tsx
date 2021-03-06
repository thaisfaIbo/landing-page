import React, { FC, memo } from "react";
import { StyledParagraph } from "./styled";
import { size, color } from "atomic-design-types";

interface Props {
  text: string;
  color?: color;
  size?: size;
}

const Paragraph: FC<Props> = ({ text, color, size = "normal" }) => (
  <StyledParagraph color={color} size={size}>
    {text}
  </StyledParagraph>
);

export default memo(Paragraph);
