import React from "react";
import Cell from "./Cell";
import "../styles/Grid.css";

function Grid() {
  const gridDimensions = 25;
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
  );
}

export default Grid;
