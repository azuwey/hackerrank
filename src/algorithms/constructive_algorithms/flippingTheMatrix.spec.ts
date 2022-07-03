import flippingTheMatrix from './flippingTheMatrix'

describe('Flipping the Matrix', () => {
  test(`Calculates the maximum possible upper-left quadrant from [
      [112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]
    ] and returns the number 414`, () => {
    expect(flippingTheMatrix([
      [112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]
    ])).toStrictEqual(414)
  })

  test(`Calculates the maximum possible upper-left quadrant from [
      [107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]
    ] and returns the number 414`, () => {
    expect(flippingTheMatrix([
      [107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]
    ])).toStrictEqual(488)
  })

  test('Calculates the maximum possible upper-left quadrant from [[1, 2], [3,4]] and returns the number 4', () => {
    expect(flippingTheMatrix([[1, 2], [3, 4]])).toStrictEqual(4)
  })
})
