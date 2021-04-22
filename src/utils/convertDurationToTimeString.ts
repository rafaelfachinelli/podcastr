export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / ( 60 * 60 ))
  const minutes = Math.floor(duration % ( 60 * 60 ) / 60)
  const seconds = duration % 60

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return timeString
}