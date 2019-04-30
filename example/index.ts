// import PriorityQueue from '../src/priorityQueue'
// let pq = new PriorityQueue([])

// import Heap from '../src/heap'

import ParingHeap from '../src/paringHeap'

let paringHeap1 = new ParingHeap()

paringHeap1.push(6)
paringHeap1.push(9)
paringHeap1.push(2)
paringHeap1.push(7)

let r = paringHeap1.pop()
console.log(paringHeap1)