import ListNode from './listNode'

export default function partition(head: ListNode | null, x: number): ListNode | null { 
  if (!head) {
    return null
  }
  const ans = new ListNode()
  ans.next = head
  let next: ListNode | null = ans
  const bigger: ListNode | null = new ListNode()
  let biggerTrail = bigger
  while (next?.next) {
    if (next.next.val >= x) {
      biggerTrail.next = next.next
      next.next = next.next.next
      biggerTrail = biggerTrail.next
      biggerTrail.next = null
    } else
    next = next!.next
  }
  next.next = bigger.next
  return ans.next
}