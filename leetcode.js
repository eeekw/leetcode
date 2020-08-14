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
      const e = child.neighbors[i];
      cloneNode.neighbors.push(copy(e))
    }
    return cloneNode
  }
  return copy(node)
}
