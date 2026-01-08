// find all duplicates

const duplicates = (array) =>
{
  const seen = new Set()
  const duplicates = new Set()
  
  for(let num of array)
  {
    if(seen.has(num))
    {
      duplicates.add(num)
    }
    else
    {
      seen.add(num)
    }
  }
  return [...seen]
}

console.log(duplicates([1,3,4,5,5,5,2,1]))

// remove duplicates from an array

const removeDuplicates = array => [...new Set(array)]

// remove duplicate from string

const removeDuplicateFromString = a=>{
  let result = ""
  for (let x of a)
  {
    if(!result.includes(x))
    {
      result+=x
    }
  }
  return result
}
console.log(removeDuplicateFromString("aavbnnnnm"))