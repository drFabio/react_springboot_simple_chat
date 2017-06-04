import cssVars from 'cssVars'
const colorMap = {}
export function getUserColorByName (userName) {
  const totalColors = cssVars.userColors.length
  if (colorMap.hasOwnProperty(userName)) {
    return cssVars.userColors[colorMap[userName]]
  }
  let colorIndex = 0
  for (let i = 0; i < userName.length; i++) {
    colorIndex = (colorIndex + userName.charCodeAt(i)) % totalColors
  }
  const color = cssVars.userColors[colorIndex]
  colorMap[userName] = colorIndex
  return color
}
export default getUserColorByName
