class Heap {
    constructor() {
        this.store = [];
    }
    
    peak() {
        return this.store[0];
    }
    
    size() {
        return this.store.length;
    }
    
    pop() {
        if (this.store.length < 2) {
            return this.store.pop();
        }
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }
    
    push(val) {
        this.store.push(val);
        this.heapifyUp(this.store.length - 1);
    }
    
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1,2].map((x) => parent * 2 + x).filter((x) => x < this.size());
            if (this.shouldSwap(child2, child)) {
                child = child2
            }
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    shouldSwap(child, parent) {
        if (!child) return false;
        const c = (this.store[child][0] + 1) / (this.store[child][1] + 1) - (this.store[child][0]) / (this.store[child][1]);
        const p = (this.store[parent][0] + 1) / (this.store[parent][1] + 1) - (this.store[parent][0]) / (this.store[parent][1]);
        return c > p;
    }
}