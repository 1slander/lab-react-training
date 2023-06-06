import { useState } from 'react';

const NumbersTable = ({ limit }) => {
  const limitArray = [...Array(limit).keys()];

  return (
    <div>
      {limitArray.map((elm, idx) => {
        return (
          <div
            key={idx}
            className={
              (elm + 1) % 2 === 0 ? 'numberTable redBox' : 'numberTable'
            }
          >
            {elm + 1}
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
