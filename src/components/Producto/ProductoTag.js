import React from "react";

export const ProductoTag = (props) => {
  const { tag } = props;
  return <span className="tags">{tag} </span>;
};
