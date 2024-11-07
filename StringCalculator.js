const add = (numbers) => {
  if (!numbers || numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    delimiter = new RegExp(numbers[2]);
    numbers = numbers.slice(4);
  }

  const numbersArray = numbers.split(delimiter).map((num) => {
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
