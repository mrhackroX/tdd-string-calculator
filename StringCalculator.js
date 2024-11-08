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

  const negativeNums = numbersArray.filter((num) => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(
      `Negative numbers are not allowed: ${negativeNums.join(", ")}`
    );
  }

  let sum = 0;
  for (let i = 0; i <= numbersArray.length - 1; i++) {
    sum += numbersArray[i];
  }

  return sum;
};

module.exports = {
  add,
};
