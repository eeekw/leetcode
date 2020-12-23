function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

var cloneGraph = function (node) {
  const map = new Map()
  const list = []
  function copy(child) {
    if (child == null) {
      return
    }
    if (map.has(child)) {
      return map.get(child)
    }
    const cloneNode = new Node(child.val)
    map.set(child, cloneNode)
    for (let i = 0; i < child.neighbors.length; i++) {
      const e = child.neighbors[i]
      cloneNode.neighbors.push(copy(e))
    }
    return cloneNode
  }
  return copy(node)
}

function quickSort1(arr, left, right) {
  if (arr.length < 2) {
    return arr
  }
  let partitionIndex = partition(arr, left ?? 0, right ?? arr.length - 1);
  quickSort(arr, left, partitionIndex-1);
  quickSort(arr, partitionIndex+1, right);

  return arr
}

function partition(arr, left, right) {
  var pivot = left // 设定基准值（pivot）
  var index = pivot + 1
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const quickSort2 = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
      //如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) {
      //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) {
        //找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) {
        //找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}

var canFinish = function (numCourses, prerequisites) {}

var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = new Array(n + 1)
  dp[0] = dp[1] = 0
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
}
