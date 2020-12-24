function candy(ratings: number[]): number {
  if (ratings.length < 2) {
    return ratings.length
  }
  
  let prizes = new Array(ratings.length).fill(1)
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      prizes[i] = prizes[i - 1] + 1
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && prizes[i] <= prizes[i + 1]) {
      prizes[i] = prizes[i + 1] + 1
    }
  }

  return prizes.reduce((acc, cur) => acc + cur)
}