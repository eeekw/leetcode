function search(nums: number[], target: number): number {
  let res = -1

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }

  if (target >= nums[0]) {
    let i = 0
    while (nums[i] < target) {
      i++
    }
    if (nums[i] === target) {
      return i
    }
  }
  if (target <= nums[nums.length - 1]) {
    let i = nums.length - 1
    while (nums[i] > target) {
      i--
    }
    if (nums[i] === target) {
      return i
    }
  }

  return res
}
// 二分查找
function search2(nums: number[], target: number): number {
  let res = -1

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (target === nums[mid]) {
      return mid
    }
    
    if (nums[0] <= nums[mid]) {
      if (target >= nums[0] && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[nums.length - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return res
}