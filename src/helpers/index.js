export const getPathName = (location) => {
  
  if (location.location) {
    return location.location.pathname
  }
  return location.pathname
}