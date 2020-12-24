function generateParenthesis(n: number): string[] {
  
  function dps(parent: string, left: number, right: number): string[] {
    if (left === 0 && right === 0) {
      return [parent]
    }
    if (left > right) {
      return []
    }
    let leftArr: string[] = []
    let rightArr: string[] = []
    if (left > 0) {
      leftArr = dps(parent + '(', left - 1, right)
    }
    if (right > 0) {
      rightArr = dps(parent + ')', left, right - 1)
    }

    return leftArr.concat(rightArr)
  }

  return dps('', n, n)
}