import React from "react";

interface TextRotatorProps {
  text: string;
  rotationText: string[];
}

const TextRotator = ({ text, rotationText }: TextRotatorProps) => (
  <React.Fragment>
    <h1>{`Hi! I'm Nenad`}</h1>
    <p>
      <span className="txt-rotate" data-rotate={JSON.stringify(rotationText)}>
        <span className="wrap">{text}</span>
      </span>
    </p>
  </React.Fragment>
);

export default TextRotator;
