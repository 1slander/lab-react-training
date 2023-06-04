import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [click, setClick] = useState(false);

  const divStyle = {
    cursor: 'pointer',
    width: '300px',
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      {click ? (
        <img
          onClick={handleClick}
          src={imgClicked}
          style={divStyle}
          alt="random picture"
        />
      ) : (
        <img
          onClick={handleClick}
          src={img}
          style={divStyle}
          alt="random picture"
        />
      )}
    </div>
  );
};

export default ClickablePicture;
