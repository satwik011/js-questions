
// A intersection b
const intersection = (a,b) => {
  setb = new Set(b)
  return [...new Set(a.filter(x=> setb.has(x)))]
}
console.log(intersection([1,5],[1,3,3,3]))