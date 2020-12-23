export class TreeNode {
  val: number     
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)         
    this.right = (right===undefined ? null : right)
 }
}

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  const result: number[][] = []
  const pool: TreeNode[] = [root]

  let children: number[] = []
  result.push(children)
  
  let reserve = false
  let breakIndex = pool.length
  while (breakIndex) {

    const node = pool.shift()
    breakIndex--
    if (node) {
      if (!reserve) {
        children.push(node.val)
      } else {
        children.unshift(node.val)
      }
      node.left && pool.push(node.left)
      node.right && pool.push(node.right)
    }

    if (breakIndex === 0) {
      reserve = !reserve
      breakIndex = pool.length
      if (breakIndex > 0) {
        children = []
        result.push(children)
      }
    }
  }

  return result
}