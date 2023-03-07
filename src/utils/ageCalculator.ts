export const ageCalculator = (publishDate: Date | undefined) => {
  if (!publishDate) return;

  const today = new Date();

  let diff = Math.floor(today.getTime() - new Date(publishDate).getTime());

  let day = 1000 * 60 * 60 * 24;
  let days = Math.floor(diff / day);
  let months = Math.floor(days / 31);
  let years = Math.floor(months / 12);

  if (!years && !months) {
    if (days > 1) {
      return `${days} days`;
    } else {
      return `${days} day`;
    }
  }

  if (!years && months) {
    if (months > 1) {
      return `${months} months`;
    } else {
      return `${months} month`;
    }
  }

  if (years) {
    if (years > 1) {
      return `${years} years`;
    } else {
      return `${years} year`;
    }
  }
};
