const toVnd = (str = '') => {
  return str
    .toString()
    .replace(/,|\./gi, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default toVnd;
