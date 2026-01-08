const reverseString = a =>{
    return a.split("").reverse().join("")
}
console.log(reverseString("satwik"))

// palindrome

const palindrome = a => {
    return a === a.split('').reverse().join('')
}

console.log(palindrome(racecar))