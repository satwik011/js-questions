// most frequant element from Array

const mostFrequent  = array =>{
 const freq = {}
 let max = 0 ,result;
 for(let x of array)
 {
   freq[x] = (freq[x] + 1) || 1
   if(freq[x] > max)
   {
     max = freq[x]
     result = x
   }
 }
 return  result
 
}

console.log(mostFrequent([1,2,2,3,3]))


// return object 
const mostFrequentObject = array => {
  const freq = {};
  let max = 0;
  const result = {};

  for (let x of array) {
    freq[x] = (freq[x] || 0) + 1;
    if (freq[x] > max) {
      max = freq[x];
    }
  }

  for (let key in freq) {
    if (freq[key] === max) {
      result[key] = max;
    }
  }

  return result;
};