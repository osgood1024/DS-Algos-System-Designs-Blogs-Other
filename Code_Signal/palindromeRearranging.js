/*
link: https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico/comments?solutionId=WRxSCgdscbvHeRtM3
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

*/

function palindromeRearranging(s) {
    let ss=s.split("").sort()
    let count=0
    while(ss.length){
      let t=ss.shift()
      console.log(t,ss)
      if(t===ss[0]){
          ss.shift()
      } 
      else{
          count++
      } 
    }
    return count<2
  }



//Another way of solving it; could be using hash.
// Basically count the frequency of the letter, and if the total frequncy of letter is odd more than once return false  


/*
function palindromeRearranging(s) {
        let hash={}
        let string=s.split('')
        for(let str of string){
            hash[str]=hash[str]+1 || 1
        }
        
        let oddCount=0

        for(let keys in hash){
            if(hash[keys]%2===1){
                oddCount++
            }
        }
        return oddCount<=1
}
*/