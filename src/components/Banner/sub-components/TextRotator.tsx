import React from "react";

interface TextRotatorProps {
  text: string;
  rotationText: string[];
}

const TextRotator= ({ text, rotationText }: TextRotatorProps) => (
  <h1>
    {`Hi! I'm Nenad,`}{" "}
    <span className="txt-rotate" data-rotate={JSON.stringify(rotationText)}>
      <span className="wrap">{text}</span>
    </span>
  </h1>
);

export default TextRotator;
