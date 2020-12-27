function minJump(jump: number[]): number {
  const n = jump.length
  const minSteps: number[] = new Array(n).fill(-1) // 最小步数
  const maxDistances: number[] = [] // 步数对应的最远距离
  minSteps[0] = 0
  maxDistances[0] = 0
  let w = 0 // 步数
  let ans: number = 0
  for (let i = 0; i < n; i++) {
    if (i > maxDistances[w]) {
      w++
    }

    minSteps[i] = minSteps[i] < 0 ? w + 1 : Math.min(minSteps[i], w + 1)

    if (i + jump[i] >= n) {
      ans = !!ans ? Math.min(ans, minSteps[i] + 1): minSteps[i] + 1
    } else {
      const next = i + jump[i]
      minSteps[next] = minSteps[next] > -1 ? Math.min(minSteps[next], minSteps[i] + 1) : minSteps[i] + 1

      maxDistances[minSteps[i] + 1] = !!maxDistances[minSteps[i] + 1] ? Math.max(maxDistances[minSteps[i] + 1], next) : next
    }
  }

  return ans
}
