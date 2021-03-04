
// Undirected Graph (without condition yet)
class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex]=[] ;
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=>v!==vertex1)
    }

    removeVertex(vertex){
      
       while(this.adjacencyList[vertex].length){
           const adjacentVertex=this.adjacencyList[vertex].pop()
           this.removeEdge(vertex, adjacentVertex)
       }

       delete this.adjacencyList[vertex]
    }

    dfs(start){
        const result =[]
        const visited={}
        const adjacencyList=this.adjacencyList

        function dfs1(vertex){
            if(!vertex) return null
            visited[vertex]=true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs1(neighbor)
                }
            })
        }
        dfs1(start)

        return result
    }


}

const g= new Graph()

// g.addVertex('Tokyo')
// g.addVertex('Seoul')
// g.addVertex('Jakarta')
// g.addVertex('New_Jersey')

// g.addEdge('Tokyo','Seoul')
// g.addEdge('New_Jersey','Tokyo')
// g.addEdge('Jakarta','Tokyo')
// g.addEdge('Seoul','Jakarta')

// g.removeVertex('Tokyo')
// g.removeVertex('New_Jersey')
// g.removeEdge('Tokyo','Jakarta')
// g.removeEdge('Seoul','Tokyo')

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')

console.log(g.dfs('A'))

// console.log(g)

