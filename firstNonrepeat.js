// aabbcddef

const firstNonRepeating = a=>{
    let count = {}
    for(let x of a)
    {
        count[x]= (count[x] +1) || 1 
    }
    for (let x of a)
    {
        if(count[x]=== 1)
        {
            return x
        }
    }
}

firstNonRepeating("aabccddfff")