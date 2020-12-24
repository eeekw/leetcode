import ListNode from './listNode'

export default function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const nexts = lists.filter(v => !!v)
  if (nexts.length === 0) {
    return null
  }
  if (nexts.length === 1) {
    return nexts[0]
  }
  const list: ListNode = new ListNode()
  let next: ListNode = list
  let min = 0
  let index = 0
  while (nexts.length > 1) {
    min = nexts[0]!.val
    index = 0
    for (let i = 1; i < nexts.length; i++) {
      if (min > nexts[i]!.val) {
        min = nexts[i]!.val
        index = i
      }
    }
    if (nexts[index]!.next) {
      nexts[index] = nexts[index]!.next
    } else {
      nexts.splice(index, 1)
    }

    next.next = new ListNode(min)
    next = next.next
  }
  next.next = nexts[0]

  return list.next
}