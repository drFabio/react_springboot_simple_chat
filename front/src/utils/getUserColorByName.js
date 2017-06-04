import cssVars from 'cssVars'
const colorMap = {}
const totalColors = cssVars.userColors.length
export function getUserColorByName (userName) {
  if (colorMap.hasOwnProperty(userName)) {
    console.log('Has own property!')
    return cssVars.userColors[colorMap[userName]]
  }
  const charQuantity = userName.length
  let colorIndex = userName.charCodeAt(0) * charQuantity
  for (let i = 0; i < Math.min(4, charQuantity - 1); i++) {
    colorIndex = userName.charCodeAt(i)
  }
  colorIndex = colorIndex % totalColors
  const color = cssVars.userColors[colorIndex]
  colorMap[userName] = colorIndex
  return color
}
export default getUserColorByName
