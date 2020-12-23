function divide(dividend: number, divisor: number): number {
  let res: number = 1
  
  if (dividend === 0) {
    return 0
  }
  if (divisor === 1) {
    return dividend
  }
  if (divisor === -1) {
    if (dividend === -Math.pow(2, 31)) {
      return Math.pow(2, 31) - 1
    }
    return -dividend
  }
  const d = dividend < 0 ? -dividend: dividend
  const r = divisor < 0 ? -divisor : divisor
  let m = r

  if (r > d) {
    return 0
  }
  
  let sign = dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0 ? 1 : -1
  while (m + m <= d) {
    m += m
    res += res
  }
  res += divide(d - m, r)
  return sign > 0 ? res: -res
}