
const secondLargestNumber = array => {
      let max = -Infinity, second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargestNumber([1,2,3,5]))