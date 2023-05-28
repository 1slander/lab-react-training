import getStars from '../functions/getStars';

function Rating({ children }) {
  return <div className="stars">{getStars(children)}</div>;
}

export default Rating;
