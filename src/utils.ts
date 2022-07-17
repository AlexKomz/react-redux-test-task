export const noop = () => {};

export const generateRandomId = (): string => (Math.random() * 100_000_000).toFixed().toString();

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
