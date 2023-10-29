export const useData = () => {
  const currentDate = new Date();
  const displayTime = () => {
    return `${String(currentDate.getHours()).padStart(2, "0")}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}`;
  };
  return { displayTime };
};
