function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0
  }
  let start = 0
  let i = 0
  while (start + needle.length <= haystack.length) {
    if (haystack[start + i] !== needle[i]) {
      start++
      i = 0
      continue
    }
    i++
    if (i === needle.length) {
      return start
    }
  }

  return -1
}