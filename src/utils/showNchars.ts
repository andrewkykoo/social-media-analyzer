export const showNchars = (str: string | undefined) => {
  if (!str) return;
  let shortenedStr = str.substring(0, 100);
  /*
  "merc v" -> "merc"
  "merc vapo" -> "merc"
  "merc " -> "merc "

  if the last char of the str is NOT empty string
    start iterating from the last char until we hit empty char (left-to-right iteration)
    when we hit the empty char, use the index of the empty char to return a shortened string using substring method

  */

  const len = shortenedStr.length;

  if (shortenedStr[len - 1] === " ") {
    return shortenedStr;
  } else {
    for (let i = len - 1; i >= 0; i--) {
      if (shortenedStr[i] === " ") {
        return shortenedStr.substring(0, i + 1);
      }
    }
  }
};
