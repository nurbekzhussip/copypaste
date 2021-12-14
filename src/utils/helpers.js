export const generateShortUUID = () => {
  const today = new Date();
  const head = today.getTime().toString(36);
  const tail = Math.random().toString(36).substr(2);

  return head + tail;
};
