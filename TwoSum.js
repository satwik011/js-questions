// [1,5,6,7] target = 8

const twoSum = (a,value)=>{
const map = {}
for(let x =0;x<a.length;x++)
{
    let differnce =  value - a[x]
    if(map[differnce] !== undefined) return [map[differnce],x]
    map[a[i]] = x
}
}

console.log(twoSum([1,5,6,7],8))