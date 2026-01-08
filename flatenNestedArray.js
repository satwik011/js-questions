// flaten array
const flatenArray = array =>{
   return array.reduce((acc , value)=> {
        acc.concat(Array.isArray(value) ? flatenArray(value): value)
    },[])
}
console.log(flatenArray([1,[2,3]]))