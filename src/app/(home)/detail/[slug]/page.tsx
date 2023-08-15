'use client'
import './style.css'
import React, { useEffect } from 'react'
import Header from '@/Components/Listing/Header'
import { useParams } from 'next/navigation'
import Api from '@/Api'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const params = useParams()
  const dispatch = useDispatch()
  const movieDetail = useSelector((state: any) => state.data.movieDetail)
  const loading_movieDetail = useSelector(
    (state: any) => state.data.loading_movieDetail
  )

  useEffect(() => {
    Api('movieDetail', { id: params?.slug }, dispatch)
  }, [params?.slug])

  return (
    <React.Fragment>
      <Header title={'Movie Details'} />
      <div className="listing-container mt-5">
        {JSON.stringify(movieDetail)}
      </div>
    </React.Fragment>
  )
}
