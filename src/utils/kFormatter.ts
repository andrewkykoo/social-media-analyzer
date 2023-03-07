// export const kFormatter = (
//   numInString: undefined | number
// ): string | number => {
//   const num = Number(numInString);
//   return Math.abs(num) > 999
//     ? Math.sign(num) * Math.round(Math.abs(num / 100) / 10) + "k"
//     : Math.sign(num) * Math.abs(num);
// };

export const intToString = (numInString: undefined | number) => {
  const value = Number(numInString);
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + value).length / 3);
  let shortValue: number | string = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
