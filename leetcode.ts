class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

class Child {
  f: number = 0
  g: number = 0
}

function rob(root: TreeNode | null): number {
  function getChild(node: TreeNode | null): Child {
    if (!node) {
      return new Child()
    }
    let child = new Child()
    let l: Child = new Child()
    let r: Child = new Child()
    if (node.left) {
      l = getChild(node.left)
    }
    if (node.right) {
      r = getChild(node.right)
    }
    child.f = node.val + l.g + r.g
    child.g = Math.max(l.f, l.g) + Math.max(r.f, r.g)

    return child
  }
  const child = getChild(root)
  return Math.max(child.f, child.g)
}

const result = rob(new TreeNode(5))
console.log(result)

function romanToInt(s: string): number {
  let number: number = 0
  const map = new Map<string, number>()
  map.set('M', 1000)
  map.set('CM', 900)
  map.set('D', 500)
  map.set('CD', 400)
  map.set('C', 100)
  map.set('XC', 90)
  map.set('L', 50)
  map.set('XL', 40)
  map.set('X', 10)
  map.set('IX', 9)
  map.set('V', 5)
  map.set('IV', 4)
  map.set('I', 1)
  map.forEach((val, key) => {
    while (s.startsWith(key)) {
      s = s.slice(key.length)
      number += val
    }
  })
  return number
}

console.log(romanToInt('III'))

function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) {
    return ''
  }
  function getLength(): number {
    let length = 0
    for (let i = 0; i < strs[0].length; i++) {
      const c = strs[0].slice(0, i + 1)
      for (let j = 0; j < strs.length; j++) {
        const e = strs[j]
        if (!e.startsWith(c)) {
          return length
        }
      }
      length++
    }
    return length
  }
  return strs[0].substr(0, getLength())
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  let numbers: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    let k = nums.length - 1
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < k; j++) {
      if (j - 1 > i && nums[j] == nums[j - 1]) {
        continue
      }
      while (nums[i] + nums[j] + nums[k] > 0) {
        k--
      }
      if (j >= k) {
        break
      }
      const sum = nums[i] + nums[j] + nums[k]
      if (sum == 0) {
        numbers.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return numbers
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

function palindromePairs(words: string[]): number[][] {
  let number: number[][] = []
  for (let i = 0; i < words.length; i++) {
    const e1 = words[i]
    for (let j = i + 1; j < words.length; j++) {
      const e2 = words[j]
      function isPalindrome(compose: string): boolean {
        let k = 0
        while (k < compose.length - k) {
          if (compose.charAt(k) !== compose[compose.length - 1 - k]) {
            return false
          }
          k++
        }
        return true
      }
      if (isPalindrome(e1 + e2)) {
        number.push([i, j])
      }
      if (isPalindrome(e2 + e1)) {
        number.push([j, i])
      }
    }
  }
  return number
}

console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']))

function letterCombinations(digits: string): string[] {
  let output: string[] = []
  const map = new Map()
  map.set('2', ['a', 'b', 'c'])
  map.set('3', ['d', 'e', 'f'])
  map.set('4', ['g', 'h', 'i'])
  map.set('5', ['j', 'k', 'l'])
  map.set('6', ['m', 'n', 'o'])
  map.set('7', ['p', 'q', 'r', 's'])
  map.set('8', ['t', 'u', 'v'])
  map.set('9', ['w', 'x', 'y', 'z'])

  function backtrack(combination: string, nextDigits: string) {
    if (nextDigits.length == 0) {
      output.push(combination)
    } else {
      const letters = map.get(nextDigits.substr(0, 1))
      for (let i = 0; i < letters.length; i++) {
        const e = letters[i]
        backtrack(combination + e, nextDigits.substr(1))
      }
    }
  }

  if (digits.length != 0) {
    backtrack('', digits)
  }
  return output
}

console.log(letterCombinations('23'))

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let i = 0
  function next(node: ListNode | null): ListNode | null {
    if (!node) {
      return null
    }
    node.next = next(node.next)
    i++

    if (i == n) {
      return node.next
    }

    return node
  }

  return next(head)
}

function isValid(s: string): boolean {
  let map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  function pair(sub: string): boolean {
    for (let i = 0; i < sub.length - 1; i++) {
      if (map.get(sub.charAt(i)) == sub.charAt(i + 1)) {
        return pair(sub.substring(0, i) + sub.substring(i + 2))
      }
    }
    if (sub.length == 0) {
      return true
    } else {
      return false
    }
  }

  return pair(s)
}

console.log(isValid('()[]{}'))

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function isSame(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) {
      return true
    }
    if (p != null && q != null && p.val == q.val) {
      if (isSame(p.left, q.left) && isSame(p.right, q.right)) {
        return true
      }
    }

    return false
  }

  return isSame(p, q)
}

function countBinarySubstrings(s: string): number {
  let numbers: number[] = []
  let sameDigitNumber = 1
  let last: string = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] == last) {
      sameDigitNumber++
    } else {
      numbers.push(sameDigitNumber)
      sameDigitNumber = 1
    }
    last = s[i]
  }
  numbers.push(sameDigitNumber)
  let number: number = 0
  for (let i = 1; i < numbers.length; i++) {
    number += Math.min(numbers[i], numbers[i - 1])
  }
  return number
}

console.log(countBinarySubstrings('00110'))

function solve(board: string[][]): void {
  function findO(board: string[][], i: number, j: number) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] != 'O'
    ) {
      return
    }
    board[i][j] = 'A'
    findO(board, i - 1, j)
    findO(board, i + 1, j)
    findO(board, i, j - 1)
    findO(board, i, j + 1)
  }

  if (board.length == 0) {
    return
  }
  for (let i = 0; i < board.length; i++) {
    const e = board[0][i]
    findO(board, i, 0)
    findO(board, i, board[i].length - 1)
  }

  for (let i = 0; i < board.length; i++) {
    const e = board[0][i]
    findO(board, i, 0)
    findO(board, i, board[i].length - 1)
  }
  for (let i = 1; i < board[0].length - 1; i++) {
    const e = board[0][i]
    findO(board, 0, i)
    findO(board, board.length - 1, i)
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const e = board[i][j]
      if (e == 'O') {
        board[i][j] = 'X'
      }
      if (e == 'A') {
        board[i][j] = 'O'
      }
    }
  }
}

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
  ])
)

function multiply(num1: string, num2: string): string {
  if (num1 == '0' || num2 == '0') {
    return '0'
  }
  const multi: number[] = new Array(num1.length + num2.length).fill(0)
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      multi[i + j + 1] += parseInt(num1[i]) * parseInt(num2[j])
    }
  }
  let product = ''
  for (let i = multi.length - 1; i > 0; i--) {
    const e = multi[i];
    multi[i-1] += Math.floor((e / 10))
    multi[i] = e % 10
  }
  product = multi.join('')
  return product[0] == '0' ? product.substr(1): product
}

console.log(multiply('2', '3'))