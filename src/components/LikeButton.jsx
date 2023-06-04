import { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  const colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleBtn = () => {
    if (color < colorsArr.length - 1) {
      setColor(color + 1);
    } else {
      setColor(0);
    }
    setCount(count + 1);
  };

  const getColor = {
    backgroundColor: colorsArr[color],
  };
  return (
    <>
      <button className="btnLike" onClick={handleBtn} style={getColor}>
        {count} Likes
      </button>
    </>
  );
};

export default LikeButton;
