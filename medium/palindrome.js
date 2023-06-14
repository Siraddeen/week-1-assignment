function isPalindrome(str) {
  const normal = str.toLowerCase();
  const reves = str.split('').reverse().join('')

  return normal === reves
}





console.log(isPalindrome('anna'))   //true
console.log(isPalindrome('bai'))   //false