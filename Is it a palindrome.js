function isPalindrome(x) {
    let removeChar = x.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let checkPalindrome = removeChar.split('').reverse().join('');
     return (removeChar === checkPalindrome);
  }