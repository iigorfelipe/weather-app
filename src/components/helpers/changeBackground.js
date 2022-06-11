const changeBackground = () => {
  const date = new Date();
  const hours = date.getHours();

  let bg = 'weatherApp';

  if (hours >= 5 && hours <= 19) {
    bg = 'dia';
  }

  if (hours >= 20) {
    bg = 'noite';
  }

  return bg;
};

export default changeBackground;
