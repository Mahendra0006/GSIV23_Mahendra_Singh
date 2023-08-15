/* eslint-disable import/no-anonymous-default-export */
import * as path from './path/index'
import { update } from '@/Redux/reducers'

export default async (method: string, body: any, dispatch?: any) => {
  dispatch &&
    dispatch(
      update({
        ['loading_' + method]: true,
      })
    )
  try {
    const API: any = path
    if (API?.[method]) {
      const response = await API?.[method](body)
      console.log(method, response)
      if (response?.success !== false) {
        dispatch &&
          dispatch(
            update({
              [method]: response,
              ['loading_' + method]: false,
            })
          )
        return response
      } else {
        dispatch &&
          dispatch(
            update({
              ['loading_' + method]: false,
            })
          )
        console.log('API_ERROR', response?.status_message)
        return null
      }
    } else {
      dispatch &&
        dispatch(
          update({
            ['loading_' + method]: false,
          })
        )
      console.log('Invalid api method', method)
      return null
    }
  } catch (e: any) {
    dispatch &&
      dispatch(
        update({
          ['loading_' + method]: false,
        })
      )
    return null
  }
}
