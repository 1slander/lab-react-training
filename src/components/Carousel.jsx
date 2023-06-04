import { useState } from 'react';

const Carousel = ({ images }) => {
  const [picture, setPicture] = useState(0);

  const imagesArr = images;

  const rightBtn = () => {
    if (picture < imagesArr.length - 1) {
      setPicture(picture + 1);
    } else {
      setPicture(0);
    }
  };
  const leftBtn = () => {
    const lastImg = imagesArr.length - 1;
    if (picture >= 1) {
      setPicture(picture - 1);
    } else {
      setPicture(lastImg);
    }
  };

  return (
    <div className="carousel">
      <img
        className="carousel-img"
        src={images[picture]}
        alt="random pictures"
      />
      <div className="carousel-menu">
        <button onClick={leftBtn}>Left</button>
        <button onClick={rightBtn}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
