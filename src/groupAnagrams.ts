function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, Array<string>> = new Map()
  for (let i = 0; i < strs.length; i++) {
    const strArr = Array.from(strs[i])
    strArr.sort()
    const key = strArr.toString()
    map.has(key) ? map.get(key)!.push(strs[i]): map.set(key, [strs[i]])
  }

  return Array.from(map.values())
}