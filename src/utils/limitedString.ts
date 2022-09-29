const limitedString = (str = '', maxLength = 9) => {
  let arr = str.split(' ');
  if (arr.length > maxLength) {
    return arr.slice(0, maxLength).join(' ') + '...';
  }
  return str;
};

export default limitedString;
