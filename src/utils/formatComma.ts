const formatComma = (num: string, toFixed = 2) => {
  if (String(num).length) {
    let parts = parseFloat(num).toFixed(toFixed).split('.');
    parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '';
    let total = parts.join('.');
    if (parseFloat(total) > 0) {
      let arrTotal = total.split('.');
      if (arrTotal?.length && arrTotal[1] && parseInt(arrTotal[1], 10) > 0) {
        return total;
      }
      return arrTotal[0];
    }
    return '0';
  }
  return '';
};

export default formatComma;
