// . Write Javascript code to print whether given no is palindrome or not.

// Palindromic numbers remain the same when the digits are reversed.. Create a function which
// accepts a number and prints whether it is palindrome or not:
// 1. For each question, implement the code in a separate file. File name is specified in the
// same question.
// 2. Try to put comments in your code to improve readability.
// 3. Try to exhibit your good programming skills by completing the given questions.
// 4. Feel free to contact the technical person to clarify all your doubts.

const check=(num)=>{
    // Connvert number to string ;
        let x=num+"";
       
    for(let i=0;i<x.length;i++){
    ans= x[i]+ans;
    }
    // turnry opratore to check both value are same or not
    return x===ans?"Palindrome":"not a palindrome"
    
    }
    
    // call the function
    console.log(check(545));
    console.log(check(883))
    
    // ======================================================================================
    function isPalindrome(num) {
        if (num < 0) return false; // negative numbers can't be palindromes
        let reverse = 0;
        let temp = num;
        while (temp > 0) {
          const digit = temp % 10;
          reverse = reverse * 10 + digit;
          temp = Math.floor(temp / 10);
        }
        return num === reverse;
      }
      
    
    console.log( isPalindrome(45))
    console.log( isPalindrome(454))