// #6 ZigZag Conversion 


const convert=function(s, numRows){

    let result=[]

    let step=1,index=0


    for(let i =0;i<s.lengthl;i++){
        //if there is nothing in that index make them empty string
        if(result[index]===undefined){
            result[index]=''
        }

        result[index]+=s[i]

        /**
         * The intuition of this algo:
         * while looping the s string we are going to through limit of number of rows and looping backward like how zig zag is  
         * for instance: 
         *    example 1 => s = "PAYPALISHIRING", numRows = 3
         * 
         *    result=[there will be three index here] =>[numRows-1]
         *      
         *      we want to loop through how zig zag works in an array 
         * 
         *     "P, A, Y, P, A, L ,I ,S ,H ,I ,R ,I ,N ,G"
         *      1  2  3  4  5  6  7  8  9  10 11 12 13 14
         *  
         *      the number below is how we are going to traverse the string s 
         *      (match the number on top and bottom how the place on each index)
         *      basically is like forward backward forward backward way of looping and input index in result  
         *        
         *      [   ,   ,   ]  
         *        1   2   3
         *        5   4   7
         *        9   6   11
         *        13  8
         *            10
         *            12
         *            14
         * 
         * 
         *      result=[PAHN,APLSIIG,YIR]
         * 
         */
        if(index===0){
            step=1
        }
        else if(index===numRows-1){
            step=-1
        }
        index+=step

    }

    return result.join('')

}



