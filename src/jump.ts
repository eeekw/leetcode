export function jump(nums: number[]): number {
  const n = nums.length
  let position = n - 1
  let steps = 0
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        steps++
        break
      }
    }
  }

  return steps
}

export function jump1(nums: number[]): number {
  const n = nums.length
  let position = 0
  let next = 0
  let steps = 0
  let i = 0
  while (i < n && position < n - 1) {
    next = Math.max(next, i + nums[i])
    if (i === position) {
      position = next
      steps++
    }
    i++
  }

  return steps
}
