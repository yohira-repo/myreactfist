import React from "react";

export const ColorfulMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  const cpntentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={cpntentStyle}>{children}</p>;
};
