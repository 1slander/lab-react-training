function Greetings(props) {
  const { lang, children } = props;
  let greeting = '';

  if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'jp') {
    greeting = 'こんにちは';
  }
  return (
    <p>
      {greeting} {children}
    </p>
  );
}

export default Greetings;
