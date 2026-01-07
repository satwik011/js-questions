// order matters

const isEqualSameOrder = (a,b) => {
    return a.length === b.length && a.every((val,i)=> val === b[i])
}
console.log(isEqual([1,2,3],[1,2,3]))

// order not same
const isEqual = (a,b) => {
 if(a.length !== b.length) return false
 let count = {}
 for(let x of a)
 {
   count[x] = (count[x] + 1) || 1
 }
 for(let x of b)
 {
   if(!count[x]) return false
   count[x]--
 }
 return true
}
console.log(isEqual([1,3,3,3],[1,3,3,3]))