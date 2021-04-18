
// #904  Fruit into baskets

// Using map (faster time and space complexity)
var totalFruit = function(tree) {

    //sliding windows
   let map=new Map()
   let maxLength=0
   let windowStart=0
   
   for(let windowEnd=0;windowEnd<tree.length;windowEnd++){
     
       map.set(tree[windowEnd],(map.get(tree[windowEnd])||0)+1)
       
       
       while(map.size >2){
           map.set(tree[windowStart],map.get(tree[windowStart])-1) 
           
           if(map.get(tree[windowStart])==0){
              map.delete(tree[windowStart])
           }
           windowStart++
       }
       maxLength=Math.max(maxLength,windowEnd-windowStart+1)
   }
   
   return maxLength
};

// use hash table (slower time and space complexity)

var totalFruit = function(tree) {
    
    let hash={}
    
    let maxLength=0
    let windowStart=0
    
    for(let windowEnd=0;windowEnd<tree.length;windowEnd++){
        hash[tree[windowEnd]]=hash[tree[windowEnd]]+1 ||1
        
        while(Object.keys(hash).length>2){
            hash[tree[windowStart]]--
            if(hash[tree[windowStart]]==0){
               delete hash[tree[windowStart]]
            }
            windowStart++
        }
        maxLength=Math.max(maxLength,windowEnd-windowStart+1)
    }
    return maxLength
};