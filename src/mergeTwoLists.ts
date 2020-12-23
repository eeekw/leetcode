class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let list = new ListNode()
  let next = list
  let nextL1: ListNode | null = l1, nextL2: ListNode | null = l2
  while (nextL1 && nextL2) {
    const l = new ListNode()
    next.next = l
    if (nextL1.val <= nextL2.val) {
      l.val = nextL1.val
      nextL1 = nextL1.next
    } else {
      l.val = nextL2.val
      nextL2 = nextL2.next
    }
    next = next.next
  }
  if (nextL1) {
    next.next = nextL1
  }
  if (nextL2) {
    next.next = nextL2
  }
  return list.next
}