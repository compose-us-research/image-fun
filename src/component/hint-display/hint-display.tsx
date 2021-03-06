import React from "react";
import CompoundWordDisplay from "../compound-word-display/compound-word-display";

interface HintDisplayProps {
  secrets: string[];
}

const HintDisplay: React.FC<HintDisplayProps> = ({ secrets }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
    }}
  >
    {secrets.map((secret, index) => (
      <CompoundWordDisplay key={index} word={secret} />
    ))}
  </div>
);

export default HintDisplay;
