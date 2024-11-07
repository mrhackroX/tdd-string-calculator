const add = (numbers) => {
  if (!numbers || numbers === "") return 0;

  const numbersArray = numbers.split(",").map((num) => {
    return parseInt(num);
  });

  let sum = 0;
  for (let i = 0; i <= numbersArray.length - 1; i++) {
    sum += numbersArray[i];
  }

  return sum;
};

module.exports = {
  add,
};
