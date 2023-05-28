import getStars from '../functions/getStars';

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  return (
    <div className="driver-card">
      <img className="driver-card-img" src={img} alt="${name}" />
      <div className="driver-card-body">
        <h2 className="driver-card-name">{name}</h2>
        <p className="driver-card-rating">{getStars(rating)}</p>
        <p className="driver-card-text">
          {model} - <span>{licensePlate}</span>
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
