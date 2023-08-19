/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { memo, useState, useEffect, useCallback } from 'react'

interface props {
  src: string //image source url
  fallbackSrc?: string //fallback image url
  alt?: string //image alt-text
  [key: string]: any //other image props
}

const Image = ({ src, fallbackSrc, ...imageProps }: props) => {
  const [imageSrc, setImageSrc] = useState(src ?? fallbackSrc) //assigning image source

  //updating source image on updating source
  useEffect(() => {
    setImageSrc(src ?? fallbackSrc ?? '/image/no-image.png') //assiging image sorce
  }, [src, fallbackSrc])

  //assigin fallback source to main source if failed
  const onError = useCallback(() => {
    setImageSrc(fallbackSrc ?? '/image/no-image.png') //assiging image sorce
  }, [fallbackSrc])

  return <img src={imageSrc} {...imageProps} onError={onError} />
}

export default memo(Image)
