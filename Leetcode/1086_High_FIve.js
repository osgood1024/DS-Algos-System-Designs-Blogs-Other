// #1086 High Five

const highFive= function (items){
    let overall={}
    //The goal for the hash overall, is to get the id and scores.For instance: overall:{'1':[91,92,60,65,87,100],'2':[93,97,77,100,76]}
    for(let i =0;i<items.length;i++){
        let id=items[i][0]
        let score=items[i][1]
        if(!overall[id]){
            overall[id]=[]
        }
        overall[id].push(score)
    }

    let final=[]

    //We want to loop through each of the keys only the top 5 scores
    Object.keys(overall).forEach((key)=>{
        let avg=0
        //sort the array in descending order 
        overall[key].sort((a,b)=>b-a)
        //Get the top five scores 
        for(let i =0;i<5;i++){
            avg+=overall[key][i]
        }
        avg=Math.floor(avg/5)
        final.push([key,avg])
    })
    return final
}

