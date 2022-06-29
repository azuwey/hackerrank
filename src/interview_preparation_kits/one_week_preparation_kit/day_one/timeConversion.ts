export default function timeConversion(time: string): string {
    const [hour, minutes, secondsWithPeriod] = time.split(':')
    const seconds = secondsWithPeriod.slice(0, 2)
    const period = secondsWithPeriod.slice(2, 5)
    let militaryHour = 0

    if (period === 'AM' && hour !== '12') {
        militaryHour = parseInt(hour)
    } else if (period === 'PM' && hour !== '12') {
        militaryHour = 12 + parseInt(hour)
    } else if (period === 'PM' && hour === '12') {
        militaryHour = 12
    }

    return `${militaryHour.toString().padStart(2, '0')}:${minutes}:${seconds}`
}