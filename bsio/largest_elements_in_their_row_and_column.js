
// Largest Elements In Their Row And Column
class Solution {
    solve(matrix) {

        let row = new Array(matrix.length).fill(0)
        let col = new Array(matrix[0].length).fill(0)
        
        // scan through each rows and cols to check which has "1" on the rows and cols and increment it 
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    row[i]++
                    col[j]++
                }
            }
        }


        let count = 0
        // Only count the row and column that has '1'
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1 && row[i] == 1 && col[j] == 1) {
                    count++
                }
            }
        }

        return count

    }
}