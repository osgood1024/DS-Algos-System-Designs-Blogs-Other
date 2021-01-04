
// Leetcode #1710 Maximum Unts on a Truck (Weekly Contest 222 (easy))


// Time complexity for this one could be O(n^2)
var maximumUnits = function(boxTypes, truckSize) {
    
        boxTypes.sort((a,b)=>b[1]-a[1])
        let box=0
        let max_unit=0
        
        for(let i =0;i<boxTypes.length;i++){
         
            
            while(boxTypes[i][0]!==0 && box<truckSize){
                
                max_unit+=boxTypes[i][1]
                boxTypes[i][0]--
                box++
    
            }
            
        }

        return max_unit

}


//Time complexity O(nlog(n))- due to the sort function 
const maximumUnits= function (boxTypes, truckSize){

    boxTypes.sort((a,b)=>b[1]-a[1])
    let curr=0,res=0
        for(let i =0;i<boxTypes.length;i++){
            if(curr+boxTypes[i][0]<=truckSize){
            res+=boxTypes[i][0]*boxTypes[i][1]
            curr+=boxTypes[i][0]
        }else{
            res+=(truckSize-curr)*boxTypes[i][1]

        }
    }
    return res
}


// We can also solve it this way in JS- Time Complexity also O(nlog(n))

const maximumUnits= function (boxTypes, truckSize){

    boxTypes.sort((a,b)=>b[1]-a[1])

    let numUnits=0

    for(let i =0;i<boxTypes.length;i++){
        /**
         * 
         * for instance boxTypes => [[1,3],[2,2],[3,1]]
         * numBoxes will be the first index and numUnitsPerBox will be the second index
         * so in the example the numBoxes will be 1,2,3 while numUnitsPerBox will be 3,2,1
         * Very JS, React way of doing it
        */
        const[numBoxes, numUnitsPerBox]=boxTypes[i]

        if(numBoxes<truckSize){
            numUnits+=numBoxes*numUnitsPerBox;
            truckSize-=numBoxes
        }else{
            numUnits+=truckSize*numUnitsPerBox;
            break;
        }
    }

    return numUnits
  
}







        