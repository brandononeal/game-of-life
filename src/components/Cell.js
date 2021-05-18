import React, { useState } from "react";

function Cell() {
  const [living, setLiving] = useState(false);

  return (
    <div
      className={living ? "Cell living" : "Cell"}
      onClick={() => setLiving(!living)}
    ></div>
  );
}

export default Cell;
