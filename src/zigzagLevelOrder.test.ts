import {zigzagLevelOrder, TreeNode} from "./zigzagLevelOrder"

test('should ', () => {
  const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)))
  expect(zigzagLevelOrder(tree)).toEqual(
    [[1],[3,2],[4,5]])
})
