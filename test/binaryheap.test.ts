import BinaryHeap from '../src/binaryHeap'

describe('minheap', () => {
  test('build heap by an array', () => {
    let heap = new BinaryHeap([6, 1, 3, 7, 5, 2])
    
    expect(heap.getItem(0)).toBe(1)
    expect(heap.getItem(1)).toBe(5)
    expect(heap.getItem(2)).toBe(2)
    expect(heap.getItem(3)).toBe(7)
    expect(heap.getItem(4)).toBe(6)
    expect(heap.getItem(5)).toBe(3)
  })

  test('build heap comparator', () => {
    const arr = [
      { value: 6 },
      { value: 1 },
      { value: 3 },
      { value: 7 },
      { value: 5 },
      { value: 2 } 
    ]
    const heap = new BinaryHeap(arr, function(a, b) {
      return a.value - b.value
    })

    expect(heap.getItem(0)).toEqual({ value: 1 })
    expect(heap.getItem(1)).toEqual({ value: 5 })
    expect(heap.getItem(2)).toEqual({ value: 2 })
    expect(heap.getItem(3)).toEqual({ value: 7 })
    expect(heap.getItem(4)).toEqual({ value: 6 })
    expect(heap.getItem(5)).toEqual({ value: 3 })
  })

  test('build heap by push item', () => {
    let heap = new BinaryHeap<number>([])
  
    heap.push(6)
    heap.push(1)
    heap.push(3)
    heap.push(7)
    heap.push(5)
    heap.push(2)
    
    expect(heap.getItem(0)).toBe(1)
    expect(heap.getItem(1)).toBe(5)
    expect(heap.getItem(2)).toBe(2)
    expect(heap.getItem(3)).toBe(7)
    expect(heap.getItem(4)).toBe(6)
    expect(heap.getItem(5)).toBe(3)
  })

  test('pop', () => {
    const arr = [
      { value: 6 },
      { value: 1 },
      { value: 3 },
      { value: 7 },
      { value: 5 },
      { value: 2 } 
    ]
    const heap = new BinaryHeap(arr, function(a, b) {
      return a.value - b.value
    })
    
    expect(heap.pop()).toEqual({ value: 1 })
    expect(heap.pop()).toEqual({ value: 2 })
    expect(heap.pop()).toEqual({ value: 3 })
    expect(heap.pop()).toEqual({ value: 5 })
    expect(heap.pop()).toEqual({ value: 6 })
    expect(heap.pop()).toEqual({ value: 7 })
    expect(heap.pop()).toBe(undefined)
  })
})

describe('maxheap', () => {
  test('build heap by an array', () => {
    let heap = new BinaryHeap([6, 1, 3, 7, 5, 2], function(a, b) {
      return b - a
    })
    
    expect(heap.getItem(0)).toBe(7)
    expect(heap.getItem(1)).toBe(6)
    expect(heap.getItem(2)).toBe(3)
    expect(heap.getItem(3)).toBe(1)
    expect(heap.getItem(4)).toBe(5)
    expect(heap.getItem(5)).toBe(2)
  })

  test('build heap by push item', () => {
    let heap = new BinaryHeap<number>([], function(a, b) {
      return b - a
    })

    heap.push(6)
    heap.push(1)
    heap.push(3)
    heap.push(7)
    heap.push(5)
    heap.push(2)
    
    expect(heap.getItem(0)).toBe(7)
    expect(heap.getItem(1)).toBe(6)
    expect(heap.getItem(2)).toBe(3)
    expect(heap.getItem(3)).toBe(1)
    expect(heap.getItem(4)).toBe(5)
    expect(heap.getItem(5)).toBe(2)
  })

  test('pop', () => {
    const arr = [
      { value: 6 },
      { value: 1 },
      { value: 3 },
      { value: 7 },
      { value: 5 },
      { value: 2 } 
    ]
    const heap = new BinaryHeap(arr, function(a, b) {
      return b.value - a.value
    })
    
    expect(heap.pop()).toEqual({ value: 7 })
    expect(heap.pop()).toEqual({ value: 6 })
    expect(heap.pop()).toEqual({ value: 5 })
    expect(heap.pop()).toEqual({ value: 3 })
    expect(heap.pop()).toEqual({ value: 2 })
    expect(heap.pop()).toEqual({ value: 1 })
    expect(heap.pop()).toBe(undefined)
  })
})
