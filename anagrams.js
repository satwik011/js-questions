const anagrams = (a,b)=>{
    let count ={}
    for(let x of a)
    {
        count[x]= (count[x]+1) || 1
    }
    for(let x of b)
    {
        if(!count[x]) return false
        count[x]--
    }
    return true 
}
console.log(anagrams("listen","silent"))