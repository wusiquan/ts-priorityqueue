import ParingHeap from './paringHeap'
import { Comparable } from './comparator'

export interface ParingHeapStrategyConstruct<T> {
  new(): ParingHeapStrategy<T>
}

/**
 * 稀疏图可以使用
 * 边的个数m 接近 n^2
 */
export default class ParingHeapStrategy<T> {
  private heap: ParingHeap<T>

  constructor(items: T[], comparator?: Comparable<T>) {
    this.heap = new ParingHeap(items, comparator)
  }

  /**
   * return the top of the queue without removal
   * O(1)
   */
  peek() {
    return this.heap.peek()
  }

  /**
   * O(1)
   */
  insert(item: T) {
    this.heap.push(item)
  }

  /**
   * 将堆的最顶端结点取出并删除
   * O(lgn)
   */
  extract() {
    return this.heap.pop()
  }

  /**
   * 最小堆减小, 最大堆增大
   * O(lgn)
   */
  updateItem(item: T, updateItem: T) {
    
  }

  has(item: T) {
    // return this.heap.has(item)
  }

  size() {
    return this.heap.heapSize
  }
}