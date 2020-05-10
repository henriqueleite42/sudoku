export const clone = (arrObj: any) => {
  var newObj: any = (arrObj instanceof Array) ? [] : {};
  for (let i in arrObj) {
    if (arrObj[i] && typeof arrObj[i] == "object") {
      newObj[i] = clone(arrObj[i]);
    } else newObj[i] = arrObj[i]
  } return newObj;
}

export const obJLength = (obj: any) => {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
