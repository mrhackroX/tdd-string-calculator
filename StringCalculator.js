const add = (numbers) => {
  if (!numbers || numbers === "") return 0;
  return parseInt(numbers);
};

module.exports = {
  add,
};
