function permuteUnique(nums: number[]): number[][] {
  const n = nums.length
  const all: number[][] = []

  function compose(used: number[], rest: number[]) {
    if (rest.length === 0) {
      all.push(Array.from(used))
    }
    const usedNumber = new Map()
    for (let i = 0; i < rest.length; i++) {
      if (usedNumber.has(rest[i])) {
        continue
      }
      usedNumber.set(rest[i], i)
      used.push(rest[i])
      const insert = rest.splice(i, 1)
      compose(used, rest)
      used.pop()
      rest.splice(i, 0, insert[0])
    }
  }
  compose([], nums)
  return all
}