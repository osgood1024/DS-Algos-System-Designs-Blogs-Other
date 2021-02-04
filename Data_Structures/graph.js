
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
}

const g= new Graph()

g.addVertex('Tokyo')
g.addVertex('Seoul')
g.addVertex('Jakarta')
g.addVertex('New_Jersey')

g.addEdge('Tokyo','Seoul')
g.addEdge('New_Jersey','Tokyo')
g.addEdge('Jakarta','Tokyo')
g.addEdge('Seoul','Jakarta')

g.removeVertex('Tokyo')
g.removeVertex('New_Jersey')
// g.removeEdge('Tokyo','Jakarta')
// g.removeEdge('Seoul','Tokyo')
console.log(g)

