//  #560 Subarray Sum Equals K

//solving it with O(n) hash table => Best optimal solution 
const subarraySum= function (nums,k){
    let map={0:1}
    let total=0
    let count=0
    for(let i =0;i<nums.length;i++){
        total+=nums[i]
        let diff=total-k
        if(map[diff]){
            count+=map[diff]
        }
        map[total]=map[total]+1 || 1
    }

    return count
}


/*
the hash table approach above 
Say you are given an array e.g. [a0, a1, a2, a3, a4, a5, a6... an] .

[a0,  a1,  a2,    a3,   a4,   a5,  a6, ... an]
	        ^	                   ^	
             sumI	                sumJ


sumI = sum of numbers till a2 (a0 + a1 + a2)
sumJ = sum of numbers till a5 (a0 + a1 + a2 + a3 + a4 + a5)


Now lets say the difference between sumJ and sumI is equal to k. 
What that means is, the sum of numbers between a2 and a5 is equal to k ( a3 + a4 + a5 = k ), which means we found a subarray whose sum is equal to k.

We can write a3 + a4 + a5 = k as sumJ - sumI = k and sumJ - sumI = k can be written as sumJ - k = sumI

The expression sumJ - k = sumI, means have we already seen a sum which is equal to sum at current index j minus k. If yes, it means we found a subarray whose sum is equal to k.

And we keep track of how many times we see a particular sum using a HashMap.



**********
so in the code above sumI will be 'diff' while sumJ will be 'total' and target is "k"; since total-diff=k,
thus, total-k=diff . With this concept we can keep track on the diff of sum , 
basically if total-diff=k that means total-k=diff.

*/