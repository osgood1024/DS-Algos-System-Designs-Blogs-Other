// Characters in Each Bracket Depth

class Solution{
    solve(s) {

      let depth=-1
      const arr=[]

      for(const c of s){
          if(c ==="("){
              depth++
              if(arr.length<=depth){
                  arr.push(0)
              }
          }
          else if(c===")"){
            depth--
          }
          else{
              arr[depth]++
          }
      }
      return arr
   }
}