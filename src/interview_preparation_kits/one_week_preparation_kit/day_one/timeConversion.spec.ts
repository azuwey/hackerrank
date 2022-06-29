import timeConversion from './timeConversion'

describe('Time Conversion', () => {
  test('Calculates the military time for \'12:01:00PM\' and returns \'12:01:00\'', () => {
    expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  })

  test('Calculates the military time for \'12:01:00AM\' and returns \'00:01:00\'', () => {
    expect(timeConversion('12:01:00AM')).toBe('00:01:00')
  })

  test('Calculates the military time for \'07:05:45PM\' and returns \'19:05:45\'', () => {
    expect(timeConversion('07:05:45PM')).toBe('19:05:45')
  })
})
