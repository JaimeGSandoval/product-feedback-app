export const uniqueID = () => {
  const id = Date.now().toString(36) + Math.random().toString(36);

  return id.slice(-9);
};
