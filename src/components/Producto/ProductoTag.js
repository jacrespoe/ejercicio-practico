import React from "react";

export const ProductoTag = (props) => {
  const { tag } = props;
  return <span key={tag.tagId} className="tags">{tag} </span>;
};
