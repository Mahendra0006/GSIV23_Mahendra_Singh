const interceptor = (path: string, method: string, body: any) => {
  return new Promise((resolve: any, reject: any) => {
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + process.env.ACCESS_TOKEN)
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
      method,
      headers,
      ...(['head', 'get'].includes(method?.toLocaleLowerCase())
        ? {}
        : { body }),
    }

    let url: string = process.env.API_URL + (path ?? '')

    if (['head', 'get'].includes(method?.toLocaleLowerCase())) {
      const params = new URLSearchParams()
      for (const key in body) {
        params.append(key, body[key])
      }
      url = url + '?' + params.toString()
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}

export default interceptor
