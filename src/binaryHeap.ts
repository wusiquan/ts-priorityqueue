/**
 * BinaryHeap
 */
import { Comparator, Comparable } from './comparator'

const floor = Math.floor

function getParent(i: number) {
  return (i - 1) >> 1
}

function getLeft(i: number) {
  return (i << 1) + 1
}


/**
 * 默认为最小二叉堆
 * 
 * 稀疏图可以使用
 * 边的个数m < n^2
 */
export default class BinaryHeap<T> {
  private _heapArr: T[] = []
  private _comparator: Comparator<T>

  constructor(arr: T[] = [], comparable?: Comparable<T>) {
    this._comparator = new Comparator<T>(comparable)

    this._buildHeap(arr)
  }
  
  // private static getRight(i: number) {
  //   return (i << 1) + 2
  // }

  get heapSize() {
    return this._heapArr.length
  }

  getItem(index: number) {
    return this._heapArr[index]
  }

  // public heapSort() {}

  // public remove() {}

  has(item: T) {
    return this._heapArr.includes(item)
  }

  /**
   * O(lgn)
   */
  push(item: T) {
    let index = this.heapSize
    this._heapArr.push(item)
    this._bubbleUp(index)
  }

  /**
   * 将根结点，即具有最大优先级的元素取出
   * O(lgn)
   */
  pop() {
    const heapSize = this.heapSize
    let ret = this._heapArr[0]
    
    if (heapSize > 0) {
      this._heapArr[0] = this._heapArr[heapSize - 1]
      this._heapArr.pop()
      
      this._bublbleDown(0)
    }

    return ret
  }

  /**
   * 最小堆减小值, 最大堆增大值
   */
  updateItem(item: T, newItem: T) {
    // idx == -1 console.warn?
    let idx = this._heapArr.indexOf(item)

    this._heapArr[idx] = newItem
    this._bubbleUp(idx)
  }
  
  /**
   * maintaining the heap invariant
   */
  heapify(i: number) {
    this._bublbleDown(i)
  }

  /**
   * node index bubble down along the path
   * @param index 
   */
  private _bublbleDown(index: number) {
    let current = index
    
    const heapSize = this.heapSize
    const _heapArr = this._heapArr
    const _comparator = this._comparator
    const iItem = _heapArr[index]
    
    while (current < heapSize) {
      let left = getLeft(current)
      let right = left + 1
      let best
      // 用于curertn, left, right结点判断的临时变量
      let bestItem = iItem
      
      if (left < heapSize && _comparator.lessThan(_heapArr[left], bestItem)) {
        best = left
        bestItem = _heapArr[left]
      }

      if (right < heapSize && _comparator.lessThan(_heapArr[right], bestItem)) {
        best = right
        bestItem = _heapArr[right]
      }
      
      if (!best) {
        _heapArr[current] = iItem
        break
      }

      _heapArr[current] = bestItem
      current = best
    }
  }

  /**
   * node index bubble up along the path
   * @param index 
   */
  private _bubbleUp(index: number) {
    let current = index
    
    const _heapArr = this._heapArr
    const _comparator = this._comparator
    const iItem = _heapArr[index]

    while(current > 0) {
      let parent = getParent(current)
      
      // current > 0 保证了 parent >= 0
      if (_comparator.lessThan(_heapArr[parent], iItem)) {
        break
      }

      _heapArr[current] = _heapArr[parent]
      current = parent
    }

    _heapArr[current] = iItem
  }

  /**
   * 将无序数组构建成堆
   * O(n)
   * @param arr 
   */
  private _buildHeap(arr: T[]) {
    let len = arr.length

    this._heapArr = arr
    
    if (len > 1) {
      for (let i = floor(len / 2) - 1; i >= 0; i--) {
        this._bublbleDown(i)
      }
    }
  }
}
