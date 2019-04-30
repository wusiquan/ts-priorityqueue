import BinaryHeapStrategy, { BinaryHeapStrategyConstruct } from './binaryHeapStrategy'
import ArrayStrategy, { ArrayStrategyConstruct } from './arrayStrategy'
import ParingHeapStrategy, { ParingHeapStrategyConstruct } from './paringHeapStrategy'
import { Comparable } from './comparator'

// interface IPQOptions<T> {
//   // 'heap' represents HeapStrategy, 'array' represents ArrayStrategy
//   // https://stackoverflow.com/questions/41017287/cannot-use-new-with-expression-typescript
//   Strategy?: BinaryHeapStrategyConstruct<T> | ArrayStrategyConstruct<T> | ParingHeapStrategyConstruct<T>
// }

/**
 * 优先队列
 * 
 * remove方法? 不是堆擅长的，目前感觉没用到过，虽然做也简单
 * clear 方法? dispose somewhere
 */
export default class PriorityQueue<T> {
  static BinaryHeapStrategy = BinaryHeapStrategy
  static ArrayStrategy = ArrayStrategy
  static ParingHeapStrategy = ParingHeapStrategy

  strategy: BinaryHeapStrategy<T> | ArrayStrategy<T> | ParingHeapStrategy<T>

  constructor(items: T[], comparator?: Comparable<T>) {
    let Strategy = BinaryHeapStrategy

    this.strategy = new Strategy(items, comparator)
  }

  /**
   * 取出最大(小)值
   */
  peek() {
    return this.strategy.peek()
  }

  /**
   * 插入
   */
  insert(item: T) {
    return this.strategy.insert(item)
  }

  /**
   * 取出最大(小)值并删除
   */
  extract() {
    return this.strategy.extract()
  }

  /**
   * 更新值
   */
  updateItem(item: T, newItem: T) {
    return this.strategy.updateItem(item, newItem)
  }
  
  isEmpty() {
    return this.strategy.size() === 0
  }
}