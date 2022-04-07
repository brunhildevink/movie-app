const formatUrl = (path: string, object: any): string => {
  const query = `?${Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join('&')}`

  return `${process.env.REACT_APP_BASE_URL}${path}${query}&apikey=${process.env.REACT_APP_API}`
}

export default formatUrl
