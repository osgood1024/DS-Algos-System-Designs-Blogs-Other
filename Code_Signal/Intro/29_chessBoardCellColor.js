
/*
Given two cells on the standard chess board, determine whether they have the same color or not.
Link: https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi
*/ 

function chessBoardCellColor(cell1, cell2) {
    //so odd number in ['A','C','E','G'] are black and even are white
    //and even number in ['B','D','F','H'] are black and odd are white
    
    let oddBlack=['A','C','E','G']
    let evenBlack=['B','D','F','H']
    
    
    let c1=''
    let c2=''
    
    if(oddBlack.includes(cell1[0]) && cell1[1]%2===1 ){
        c1='black'
    }
    else if (oddBlack.includes(cell1[0]) && cell1[1]%2===0){
        c1='white'
    }
    
    else if(evenBlack.includes(cell1[0]) && cell1[1]%2===1){
        c1='white'
    }
    else if(evenBlack.includes(cell1[0]) && cell1[1]%2===0){
        c1='black'
    }
    
    
    
    if(evenBlack.includes(cell2[0])&& cell2[1]%2===1 ){
        c2='white'
    }
    else if(evenBlack.includes(cell2[0])&& cell2[1]%2===0){
        c2='black'
    }

    else if(oddBlack.includes(cell2[0]) && cell2[1]%2===1){
        c2='black'
    }
    else if(oddBlack.includes(cell2[0])&& cell2[1]%2===0){
        c2='white'
    }
    
    return c1===c2
    

}

/*
Some logic trick less code

function chessBoardCellColor(cell1, cell2) {
 //check if both alphabet and number add up is even or odd 
 //If its even than they should match since odd + even is always odd
      return (cell1.charCodeAt(0)+Number(cell1[1])+cell2.charCodeAt(0)+Number(cell2[1]))%2==0  

}
 
 */