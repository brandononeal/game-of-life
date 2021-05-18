import React from "react";
import Cell from "./Cell";

function Grid() {
  const gridDimensions = 25;
  const generation = 0;
  const grid = [];

  for (let row = 0; row < gridDimensions; row++) {
    const currentRow = [];
    for (let col = 0; col < gridDimensions; col++) {
      currentRow.push(0);
    }
    grid.push(currentRow);
  }

  return (
    <div className="Grid">
      <h2>Generation: {generation}</h2>
      <div className="grid-container">
        {grid.map((row, i) => {
          return (
            <div key={i}>
              {row.map(() => {
                return <Cell />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
