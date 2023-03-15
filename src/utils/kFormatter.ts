const COUNT_ABBRS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];

export const formatCount = (
  count: string | undefined,
  withAbbr = true,
  decimals = 0
) => {
  if (!count) return;

  const i =
    "0" === count
      ? Number(count)
      : Math.floor(Math.log(Number(count)) / Math.log(1000));

  let result: number | string = parseFloat(
    (Number(count) / Math.pow(1000, i)).toFixed(decimals)
  );

  if (withAbbr) {
    result = result.toString();
    result += `${COUNT_ABBRS[i]}`;
  }
  return result;
};
