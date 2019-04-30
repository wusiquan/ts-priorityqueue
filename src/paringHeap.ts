import { Comparator, Comparable } from './comparator'

// 配对结点
class ParingNode<T = any> {
  item: T
  children: T[]
  parent: T | null = null

  constructor(item: T, children = []) {
    this.item = item
    this.children = []
    this.parent = null
  }
}

export default class ParingHeap<T> {
  _comparator: Comparator<T>
  root: any
  heapSize: number = 0

  constructor(items: T[] = [], comparable?: Comparable<T>) {
    this._comparator = new Comparator<T>(comparable)

    items.forEach((item: T) => {
      this.push(item)
    })
  }

  private merge(node1: ParingNode | undefined, node2?: ParingNode) {
    const comparator = this._comparator
    let ret
    if (!node1) {
      ret = node2
    } else if (!node2) {
      ret = node1
    } else if (comparator.lessThan(node1.item, node2.item)) {
      node1.children.push(node2)
      node2.parent = node1
      ret = node1
    } else {
      node2.children.push(node1)
      node1.parent = node2
      ret = node2
    }

    return ret
  }

  private mergePairs(children: any): any {
    if (!children || children.length == 0) {
      return undefined
    } if (children.length == 1) {
      let root = children[0]
      children[0].parent = null
      return root
    } else {
      children[0].parent = null
      children[1].parent = null
      return this.merge(this.merge(children[0], children[1]), this.mergePairs(children.slice(2)))
    }
  }

  private detach(node: ParingNode) {
    const root = this.root

    const nodeSiblings = node.parent.children
    const nodeChildren = node.children

    nodeChildren.splice(nodeSiblings.indexOf(node), 1)
    node.parent = null

    // 新建一个临时堆? 再merge?
    nodeChildren.forEach((nodeChild: ParingNode) => {
      root && root.children.push(nodeChild)
      nodeChild.parent = root
    })
  }

  private findNode(item: T) {
    let q = [ this.root ]
    let node
    while(q.length) {
      let n = q.pop()
      if (n.item == item) {
        q.length = 0
        node = n
        break
      } else if (n.children.length) {
        q = q.concat(n.children)
      }
    }

    return node
  }

  peek() {
    return this.root
  }

  push(item: T) {
    this.root = this.merge(this.root, new ParingNode(item))
    this.heapSize += 1
    return item
  }

  pop() {
    const root = this.root
    const item = root && root.item
    const children = root && root.children
    this.root = this.mergePairs(children)
    this.heapSize -= 1
    return item
  }

  /**
   * 最小堆减小key, 最大堆增大key
   */
  updateItem(item: T, newItem: T) {
    let node = this.findNode(item)

    // console.warn
    if (!node) return

    if (node == this.root) {
      this.pop()
    } else {
      this.detach(node)
    }

    this.push(newItem)
  }
}
