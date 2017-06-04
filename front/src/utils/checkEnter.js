export function checkEnter (e) {
  const event = e || window.event
  const charCode = event.which || event.keyCode
  if (parseInt(charCode, 10) === 13) {
    return true
  }
  return false
}
export default checkEnter
