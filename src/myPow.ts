function myPow(x: number, n: number): number {
  
  function pow(x: number, n: number): number {
    if (n === 0) {
      return 1
    }
    
    const value = pow(x, Math.floor(n / 2))
    return n % 2 === 0 ? value * value : value * value * x
  }

  return n > 0 ? pow(x, n) : 1 / pow(x, -n)
}