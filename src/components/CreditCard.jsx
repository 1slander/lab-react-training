//import visa from '../assets/images/visa.png';
// import master from '../assets/images/master-card.svg';

function CreditCard({
  type,
  picture,
  number,
  expirationMonth,
  expirationYear,
  owner,
  bank,
  bgColor,
  color,
}) {
  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  const ccNumber = number.slice(-4);
  const expYear = expirationYear.toString().slice(-2);

  //Getting SVG error

  // function logo(type) {
  //   switch (type) {
  //     case 'Visa':
  //       return visa;
  //       break;
  //     case 'Master Card':
  //       return master;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  function getMonth(month) {
    if (month.toString().length === 1) {
      return `0${month}`;
    } else {
      return `${month}`;
    }
  }

  return (
    <div className="container">
      <div style={divStyle} className="creditCard">
        <img className="creditCard-logo" src={picture} alt={type} />
        <p className="creditCard-number">
          ●●●● ●●●● ●●●● <span>{ccNumber}</span>
        </p>
        <div className="creditCard-date">
          <p>
            Expires {getMonth(expirationMonth)}/{expYear}
          </p>
          <p>{bank}</p>
        </div>
        <p className="creditCard-owner">{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
