// #1178 Number of Valid Words for Each Puzzle 

/*
Time complexity - O( n * 2 ^ 7 + m * k) = O(n + mk)
n = len(puzzles);
m = len(words);
k = len(single word)
*/

const findNumOfValidWords= function (words, puzzles){

    const wordMap= new Map()
    let aChar='a'.charCodeAt();
    for(let i =0;i<words.length;i++){
        let mask=0
        for(let j=0;j<words[i].length;j++){
            mask=mask | 1 << words[i].charCodeAt(j)-aChar;
        }
        wordMap.set(mask,wordMap.get(mask)+1 || 1)
        
    }


    let ans= new Array(puzzles.length).fill(0)
    let mask, subMask, count, numOfWords, firstLetter;
    for(let i =0;i<puzzles.length;i++){
        mask=0
        for(let j=0;j<puzzles[i].length;j++){
            mask=mask |1 <<puzzles[i].charCodeAt(j)-aChar

            if(j==0){
                firstLetter=mask
            }
        }
        subMask=mask
        count=0
        // In this while loop we want to go through all possible "submasks" of the bit mkas for the current puzzle.
        // If our puzzle bit mask is 1011, for instance , we would generate 1011,1010,1001,1000,0011,0010,0001,0000
        while(true){
            numOfWords=wordMap.get(subMask)

            // If submask contains in the first letter of the puzzle, it is a valid word
            // Here we are adding the number of words we have seen wit this mark to our total
            if(numOfWords && ((firstLetter & subMask)==firstLetter)){
                count+=numOfWords
            }
            // We have exhausted all possible sumbasks
            if(subMask===0) break


            //Get rid of the right-most bit, andd restore any bits to the right of it that were originally in the mask.
            // If the original mask was '01011' and current submask is '01000', then submask-1='00111' and 
            // (submask-1)& mask='00011'
            // Basically to find all possible char combinations of current puzzle
            subMask=(subMask-1)& mask

        }
        ans[i]=count
    }
    return ans
}



// Another way of solving without map, however slower time complexity but fast space complexity 


var findNumOfValidWords = function(words, puzzles) {
    var aCharCode = "a".charCodeAt();
    var puzzlesLetters = new Array(puzzles.length);
    var firstLetter = new Array(puzzles.length);
    for (var i = 0; i < puzzles.length; i++) {
        puzzlesLetters[i] = firstLetter[i] = 1 << (puzzles[i][0].charCodeAt() - aCharCode);
        for (var j = 1; j < puzzles[i].length; j++) {
            puzzlesLetters[i] =puzzlesLetters[i] | 1 << (puzzles[i][j].charCodeAt() - aCharCode);
        }
    }
    
    var result = new Array(puzzles.length).fill(0);
    var wordsLetters;
    for (var i = 0; i < words.length; i++) {
        wordsLetters = 0;
        for (var j = 0; j < words[i].length; j++) {
            wordsLetters |= 1 << (words[i][j].charCodeAt() - aCharCode);
        }
        
        for (var j = 0; j < puzzles.length; j++) {
            if ((puzzlesLetters[j] & wordsLetters) === wordsLetters && (firstLetter[j] & wordsLetters) === firstLetter[j]) {
                result[j]++;
            }
        }
    }
    
    return result;
    
    
};