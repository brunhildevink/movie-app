const formatUrl = (path: string, object: Record<string, unknown>): string => {
  if (typeof object === 'object') {
    const query = `?${Object.keys(object)
      .map((key) => `${key}=${object[key]}`)
      .join('&')}`
    return `${process.env.REACT_APP_BASE_URL}${path}${query}&apikey=${process.env.REACT_APP_API}`
  }

  return ''
}

export default formatUrl
