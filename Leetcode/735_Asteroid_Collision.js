
//Leetcode #735 Asteroid Collision 

// This question is similar with the 'space battle' in bsio

// Utilize Stack to solve this problem 



var asteroidCollision = function(asteroids) {
    
    let stack=[]
    
    for(let i =0;i<asteroids.length;i++){
        let curr=asteroids[i]
        if((stack.length===0 || stack[stack.length-1]<0)&& curr<0){
           stack.push(curr)
         }
        else if(curr>0){
            stack.push(curr)
        }else{
            let pop=stack.pop()
            
            if(Math.abs(pop)<Math.abs(curr)){
                i--
            }else if (Math.abs(pop)>Math.abs(curr)){
                stack.push(pop)
            }else{
                continue ;
            }
        }
    }
    
    return stack
    
    
};