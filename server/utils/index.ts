export const removePortFromUrl = (url: string): string => {
  const colonIndex = url.indexOf(':')
  if (colonIndex !== -1) {
    return url.substring(0, colonIndex)
  }
  return url
}
