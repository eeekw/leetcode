function dailyTemperatures(T: number[]): number[] {
  const res: number[] = new Array(T.length).fill(0)
  const previous: number[] = []
  for (let i = 0; i < T.length; i++) {
    
    while (T[previous[previous.length - 1]] < T[i] && previous.length > 0) {
      const pre = previous.pop()!
      res[pre] = i - pre
    }

    previous.push(i)
  }

  return res
}