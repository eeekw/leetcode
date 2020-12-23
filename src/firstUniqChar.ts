function firstUniqChar(s: string): number {
  let i = 0
  let j = 1
  let dup = new Map()
  while (j <= s.length) {
    if (s[i] === s[j] || dup.has(s[i])) {
      dup.set(s[i], i)
      i++
      j = i + 1
      continue
    }
    j++
  }
  if (i === s.length) {
    return -1
  }

  return i
}