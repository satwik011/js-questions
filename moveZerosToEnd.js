
const moveZeros = arr => {
  const nonZero = arr.filter(x => x !== 0)
  
  return [...nonZero,...Array(arr.length - nonZero.length).fill(0)]
}
console.log(moveZeros([0,1,0,2,3,5]))