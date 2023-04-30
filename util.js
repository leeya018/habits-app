export const createThrill = () => {
  const actions = ["+", "-", "*", "/"];
  const randAction = actions[Math.floor(Math.random() * 4)];
  const randNumber1 = Math.floor(Math.random() * 10);
  const randNumber2 = Math.floor(Math.random() * 10);
  const thrill = `${randNumber1} ${randAction} ${randNumber2} `;
  return thrill;
};

export const sleep = async (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );

export const randLeft = () => Math.random() * 95 + "vw";

export const minLevel = 600;
