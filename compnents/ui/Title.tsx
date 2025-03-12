import React from "react";
import { ITextProps } from "@/types/index.type";

const Title = ({ variant = "h1", text, children, className }: ITextProps) => {
  return React.createElement(
    variant,
    { className: className },
    text || children
  );
};

export default Title;
