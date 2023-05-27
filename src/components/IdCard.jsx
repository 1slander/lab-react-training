function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCard">
      <div className="idcard-body">
        <p>
          {' '}
          <span>First name:</span> {firstName}
        </p>
        <p>
          <span>Last name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> {birth.toDateString()}
        </p>
      </div>
      <img className="idcard-img" src={picture} alt="person picture" />
    </div>
  );
}

export default IdCard;
