const countVowels = a=> {
    let vowels = "aeiouAEIOU"
    let count=0;
    for(let x of a)
    {
        if(vowels.includes(x)) count++
    }
    return count 
}
console.log(countVowels("satwik"))