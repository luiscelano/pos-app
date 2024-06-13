export const dateFormatter = (input) => {
  const date = new Date(input)
  return (
    date.getDate() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes()
  )
}
