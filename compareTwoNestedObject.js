const deepEqual = (a,b)=>{
    if(a === b) return true
    if(typeof a !== "object" || typeof b !== "object" || !a || !b) return false

    keysA = Object.keys(a)
    keysB = Object.keys(b)

    if(keysA.length !== keysB.length) return false
    return keysA.every(key => deepEqual(a[key],b[key]))
}

console.log(deepEqual({"1": 3,b : {a:1,b:3}},{"1": 3,b : {a:1,b:3}}))