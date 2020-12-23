function nextPermutation(nums: number[]): void {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i > -1) {
    let num = nums[i]
    let j = i + 2
    while (nums[i] < nums[j] && j < nums.length) {
      j++
    }
    nums[i] = nums[j - 1]
    nums[j - 1] = num
  }

  let j = i + 1
  let k = nums.length - 1
  while (j < k) {
    let num = nums[j]
    nums[j] = nums[k]
    nums[k] = num
    j++
    k--
  }
}
