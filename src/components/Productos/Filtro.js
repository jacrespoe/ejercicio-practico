import React from "react";

export const Filtro = (props) => {
  const { handleChange, query } = props;

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Buscar..."
      className="productos__filtro"
      value={query}
    />
  );
};
