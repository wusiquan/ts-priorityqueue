import { Comparable, Comparator } from './comparator'

export interface ArrayStrategyConstruct<T> {
  new(): ArrayStrategy<T>
}

/**
 * TODO: 使用Set呢? 
 * 
 * 稠密图可以使用
 * 边的个数m 接近 n^2
 */
export default class ArrayStrategy<T> {
  private comparator: Comparator<T>
  private arr: T[]

  constructor(items: T[], comparator?: Comparable<T>) {
    this.comparator = new Comparator(comparator)
    
    let arr 

    if (Array.isArray(items) && items.length) {
      // clone
      arr = items.slice(0)
    }

    this.arr = arr || []
  }

  private searchForIndex() {
    const arr = this.arr
    const len = arr.length
    const comparator = this.comparator
    let index = 0
  
    for (let i = 1; i < len; i++) {
      if (comparator.lessThan(arr[i], arr[index])) {
        index = i
      }
    }
  
    return index
  }

  private spliceOne(index: number, newValue?: T) {
    const arr = this.arr
    let len = arr.length

    // add one item
    if (newValue) {
      arr.length++
      
      while(len > index) {
        arr[len] = arr[len - 1]
        len--
      }

      arr[index] = newValue
    // remove one item
    } else {
      while(index < len - 1) {
        arr[index] = arr[index + 1]
        index++
      }

      arr.length--
    }
  }

  /**
   * O(n)
   */
  peek() {
    let index = this.searchForIndex()
    return this.arr[index]
  }

  /**
   * O(1)
   */
  insert(item: T) {
    this.arr.push(item)
  }

  /**
   * O(n)
   */
  extract() {
    let ret = this.peek()
    this.spliceOne(0)
    return ret
  }

  /**
   * O(1)
   */
  updateItem(item: T, newItem: T) {
    // TODO: 处理i为undefined的情况
    let idx = this.arr.indexOf(item)
    // console.warn
    // if (idx == -1) console.warn(`${item}不存在`)
    this.arr[idx] = newItem
  }

  has(item: T) {
    return this.arr.includes(item)
  }

  /**
   * 获取数组的大小
   */
  size() {
    return this.arr.length
  }
}