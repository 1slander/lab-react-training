const getStars = (children) => {
  const rate = Math.round(children);
  const rating = ['☆', '☆', '☆', '☆', '☆'];
  for (let i = 0; i < rate; i++) {
    rating[i] = '★';
  }
  return rating.join('');
};

export default getStars;
