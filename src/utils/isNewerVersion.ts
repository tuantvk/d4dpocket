// https://stackoverflow.com/a/52059759
const isNewerVersion = (oldVer: string, newVer: string) => {
  const oldParts = oldVer.split('.');
  const newParts = newVer.split('.');
  for (var i = 0; i < newParts.length; i++) {
    const a = parseInt(newParts[i] || '0', 10);
    const b = parseInt(oldParts[i] || '0', 10);
    if (a > b) return true;
    if (a < b) return false;
  }
  return false;
};

export default isNewerVersion;
