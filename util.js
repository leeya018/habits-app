const isValid = (thrill) => {
  return eval(thrill) !== NaN && eval(thrill) >= 0 && eval(thrill) !== Infinity;
};

export const createThrill = () => {
  let thrill;
  const actions = ["+", "-", "*"];
  do {
    const randAction = actions[Math.floor(Math.random() * actions.length)];
    const randNumber1 = Math.floor(Math.random() * 10);
    const randNumber2 = Math.floor(Math.random() * 10);
    thrill = `${randNumber1} ${randAction} ${randNumber2} `;
  } while (!isValid(thrill));
  return thrill;
};

export const sleep = async (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );

export const randLeft = () => Math.random() * 65 + "vw";

export const minLevel = 600;

//===============================HABITS ======================

export const getDateStr = (date) => {
  try {
    const resDate = new Date(date).toISOString().split("T")[0];
    return resDate;
  } catch (error) {
    console.log(error.message, date);
  }
};
export const getDateStrIsrael = (date) => {
  try {
    const dateStr = getDateStr(date);
    const dateStrIsrael = dateStr.split("-").reverse().join("-");

    return dateStrIsrael;
  } catch (error) {
    console.log(error.message, date);
  }
  return;
};
export const getFullDateStr = (date) => {
  return new Date(date).toISOString();
};
export const datesAreEquals = (d1, d2) => {
  return getDateStr(new Date(d1)) === getDateStr(new Date(d2));
};
export const fullDatesAreEquals = (d1, d2) => {
  return getFullDateStr(new Date(d1)) === getFullDateStr(new Date(d2));
};

export const addDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
export const getUrl = () => {
  return process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASIC_URL
    : process.env.NEXT_PUBLIC_BASIC_URL_PRODUCTION;
};
