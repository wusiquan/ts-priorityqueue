import ParingHeap from '../src/paringHeap'

describe('minheap', () => {
  test('build heap', () => {
    let heap = new ParingHeap([6, 1, 3, 7, 5, 2])
    
    expect(heap.heapSize).toBe(6)
  })

  test('pop', () => {
    let heap = new ParingHeap([6, 1, 3, 7, 5, 2])
    
    expect(heap.root.item).toBe(1)
    expect(heap.pop()).toBe(1)
    
    expect(heap.root.item).toBe(2)
    expect(heap.pop()).toBe(2)

    expect(heap.root.item).toBe(3)
    expect(heap.pop()).toBe(3)
    
    expect(heap.root.item).toBe(5)
    expect(heap.pop()).toBe(5)

    expect(heap.root.item).toBe(6)
    expect(heap.pop()).toBe(6)

    expect(heap.root.item).toBe(7)
    expect(heap.pop()).toBe(7)
  })

  test('pop', () => {
    let arr = [
      { value: 6 },
      { value: 1 },
      { value: 3 },
      { value: 7 },
      { value: 5 },
      { value: 2 }
    ]

    let heap = new ParingHeap(arr, function(a, b) {
      return a.value - b.value
    })

    expect(heap.root.item).toEqual({ value: 1 })

    heap.updateItem(arr[3], { value: 0 })
    expect(heap.root.item).toEqual({ value: 0 })
  })
})