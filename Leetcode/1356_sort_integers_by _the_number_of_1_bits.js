// #1356 sort integers by the number of 1 bits

var sortByBits = function(arr) {
    
    return arr.sort((a,b)=>bitCounts(a)-bitCounts(b) || a-b)
    
};

const bitCounts = function(num) {
    // console.log('first_num =>', num)
    let sum = 0
    while (num) {

        // sum => count how many '1' in that binary number 
        // num & 1 => find if the right most bit is '1'
        //  if it is one it will increment the sum(so we know how many 1 in that integer)
        sum = sum + (num & 1) //(num &1) check how many 1 in each decimal has 
        // console.log('sum_binary =', sum.toString(2))
        // console.log('sum_decimal:', sum)
        // console.log('num_binary=', num.toString(2))
        // console.log('num_decimal:', num)
        //num right shift one bit(basically delete one bit from the most rigth by one) for ex: '011' becomes '01'
        num = num >> 1
        // console.log('num_binary_after=', num.toString(2))
    }

    // console.log('sum_after=>', sum)

    return sum
}
