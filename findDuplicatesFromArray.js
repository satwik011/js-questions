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