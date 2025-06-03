const truncateString = function (str, num) {
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

const name = ["iyanu", "tobiloba", "daniel", "tomiwa", "victor", "blessde", "favour", "glory", "faith"];

const choosedName = name[Math.floor(Math.random() * name.length)];

const randomNumber = Math.round(Math.random() * 10);

console.log(truncateString(choosedName, randomNumber));