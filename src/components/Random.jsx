function Random({ min, max }) {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  return (
    <p>
      Random value between {min} and {max} => {getRandomNumber(min, max)}
    </p>
  );
}

export default Random;
