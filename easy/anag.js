
function isAnagram(str1, str2) {
    let s1 = str1.split('').sort().join('').toLowerCase();  
    let s2 = str2.split('').sort().join('').toLowerCase();  
    return(s1 === s2);

}
console.log(isAnagram('hey','yeh'))             //true
console.log(isAnagram('hey','yes'))            // false








/*
const str1 = 'heyion'
let s1 = str1.split('').sort().join('').toLowerCase(); 
console.log(s1)
*/