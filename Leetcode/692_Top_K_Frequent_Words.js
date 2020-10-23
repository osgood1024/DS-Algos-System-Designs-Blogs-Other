//  Leetcode #692 Top K Frequent Words

const topKFrequent=function (words,k){
    let arr= new Array(k).fill('')
    let hash={}
    for(let str of words){
        hash[str]=hash[str]+1 ||1
    }

    let key=Object.keys(hash)
    //If two words have the same frequency, then the word with the lower aplhabetical order comes first 
    key.sort((a,b)=>hash[a]===hash[b]? a>b ? 1 : -1 : hash[b]-hash[a])

    for(let i =0;i<k;i++){
        arr[i]=key[i]
    }

    return arr
}

let k=3
let words=["i", "love", "leetcode", "i", "love", "coding"]

console.log(topKFrequent(words,k))