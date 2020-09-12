/*
link:https://app.codesignal.com/interview-practice/task/3PcnSKuRkqzp8F6BN/description

Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.

*/


function areFollowingPatterns(strings, patterns) {
    
    for(let i = 0;i < strings.length;i++){
        if(patterns.indexOf(patterns[i]) != strings.indexOf(strings[i])) return false
    }
    return true
}



/*
Another way of solving it 
function areFollowingPatterns(strings, patterns) {

    if (strings.length!== patterns.length) return false;

    let stringObj={}
    let patternObj={}

    for(let i =0;i<strings.length;i++){
        if(!stringObj[strings[i]] && !patternObj[patterns[i]]){
            stringObj[strings[i]]=patterns[i];
            patternObj[patterns[i]]=strings[i];
        }else{
            if(stringObj[strings[i]]===patterns[i] && patternObj[patterns[i]]===strings[i]){
                continue;
            }else{
                return false
            }
        }
    }
    return true

}

*/













