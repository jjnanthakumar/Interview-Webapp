export const pad = (num, size) => {
    var s = String(num);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  };
  