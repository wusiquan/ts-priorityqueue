export interface Comparable<U> {
  (x: U, y: U): number
}

/**
 * 比较函数
 * @return 
 *   < 0  x在y之前
 *   0    x和y位置不变
 *   > 0  y在x之前
 */
const defaultComparable: Comparable<number> = function(x, y) {
  if (x === y) return 0
  return x < y ? -1 : 1
}

export class Comparator<T> {
  public compare: Comparable<T>
  
  constructor(comparable?: Comparable<T>) {
    this.compare = (comparable || defaultComparable) as Comparable<T>
  }

  lessThan(x: T, y: T) {
    return this.compare(x, y) < 0
  }

  greaterThan(x: T, y: T) {
    return this.compare(x, y) > 0
  }

  equal(x: T, y: T) {
    return this.compare(x, y) === 0
  }

  // reverse() {
  //   let originalCompareFn = this.compare
  //   this.compare = (x, y) => originalCompareFn(y, x)
  // }
}
