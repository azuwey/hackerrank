import findTheMedian from './findTheMedian'

describe('Find the Median', () => {
  test('Calculates the median from [5, 3, 1, 2, 4] and returns the number 3', () => {
    expect(findTheMedian([5, 3, 1, 2, 4])).toStrictEqual(3)
  })

  test('Calculates the median from [0, 1, 2, 4, 6, 5, 3] and returns the number 3', () => {
    expect(findTheMedian([0, 1, 2, 4, 6, 5, 3])).toStrictEqual(3)
  })
})
