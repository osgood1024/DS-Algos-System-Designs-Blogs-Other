// Count Passing car pairs 
/**
 * 
 * First round of Bloomberg Interview 
 * 
 * 
A non-empty binary array A consisting of size N is given where,

0 represents a car traveling east,
1 represents a car traveling west. 
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 <= P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

Examples:

Input  : arr[] = {0, 1, 0, 1, 1}
Output : 5
The 5 pairs are (A[0], A[1]), (A[0], A[3]), (A[0], A[4]),   
(A[2], A[3]) and (A[2], A[4]). Note that in all pairs
first element is 0, second element is 1 and index of
first element is smaller than index of second element.

Input  : arr[] = {1, 0, 0, 0, 1}
Output : 3

Input : arr[] = {0, 0, 1, 0, 0}
Output : 2

 * 
 * 
 * 
 */

//The most simple way to do it,however time complexity O(n^2) and space O(n)
/*
 const CountPassingCars = function(n){
     
    let count=0

    for(let i =0;i<n.length;i++){
        for(let j=i+1;j<n.length;j++){
            if(n[i]==0 && n[j]==1){
                count++
            }

        }
    }
    return count
 }
*/

// More efficient way to do it: Time complexity => O(n), Space complexity=>O(1)
const CountPassingCars = function(n){
    
    let countOne=0

    let countCars=0
    // Here just look at this way if we are car Zero how many car one we passed by if we traverse from the right
    // however each 0 is 
    for(let i=n.length-1;i>=0;i--){
        if(n[i]===1){
            countOne++
        }else{
            countCars+=countOne
        }
    }
    return countCars
 }



//  let n =[0, 1, 0, 1, 1]
let n=[1, 0, 0, 0, 1]

// let n =[0, 0, 1, 0, 0]
 console.log(CountPassingCars(n))