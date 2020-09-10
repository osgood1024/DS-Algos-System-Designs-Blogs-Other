
/* 
link: https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

*/


function areSimilar(a, b) {

    let count=0
    let a1,b1
    for(let i =0;i<a.length;i++){
        if(a[i]!==b[i]){
            if(count===0){
                a1=a[i]
                b1=b[i]
            }
            else if(count===1){
                if(a1!==b[i] || b1!==a[i]){
                    return false 
                }
            }
            count++
        }
         if (count==3){
            return false 
        }
    }
    
    return true
  }



  /*
  Another ways to solve the question 

    #1
  function areSimilar(a, b) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {sum++}
    }
    a.sort(); 
    b.sort();
    return a.toString() == b.toString() && sum < 3
}


    #2
function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

  */