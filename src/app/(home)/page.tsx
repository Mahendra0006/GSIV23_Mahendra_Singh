'use client'

import './style.css'
import Header from '@/Components/Listing/Header'
import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '@/Components/Listing/Card'
import Api from '@/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Moviedata } from '@/utils/index'
import ReduxSpinner from '@/Components/Spinner/Redux'
interface MovieState {
  upcomingMovies: { page: number; results: Moviedata[] }
}

interface RootState {
  data: MovieState
}

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<Moviedata[]>([])
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')
  const upcomingMovies = useSelector(
    (state: RootState) => state?.data?.upcomingMovies
  )
  const searchMovies = useSelector((state: any) => state?.data?.searchMovies)
  const loading_upcomingMovies = useSelector(
    (state: any) => state.data.loading_upcomingMovies
  )
  const loading_searchMovies = useSelector(
    (state: any) => state.data.loading_searchMovies
  )

  //loading api data
  useEffect(() => {
    if (search.length) {
      Api('searchMovies', { page, query: search }, dispatch)
    } else {
      Api('upcomingMovies', { page }, dispatch)
    }
  }, [dispatch, page, search])

  //switching to search mode on basis of search length
  useEffect(() => {
    if (search.length === 0 || search.length >= 1) {
      setPage(1)
    }
  }, [search])

  //appending movie data from redux to local state
  useEffect(() => {
    if (search.length) {
      if (searchMovies) {
        if (searchMovies?.page === 1) {
          setData(searchMovies.results)
        } else {
          setData((e: any) => [...e, ...searchMovies?.results])
        }
      }
    } else {
      if (upcomingMovies) {
        if (upcomingMovies?.page === 1) {
          setData(upcomingMovies?.results)
        } else {
          setData((e: any) => [...e, ...upcomingMovies?.results])
        }
      }
    }
  }, [upcomingMovies, searchMovies, search])

  //loading more on reaching end
  const nextPage = useCallback(() => {
    if (search.length) {
      if (!loading_searchMovies) {
        setPage((e: number) => e + 1)
      }
    } else {
      if (!loading_upcomingMovies) {
        setPage((e: number) => e + 1)
      }
    }
  }, [loading_upcomingMovies, loading_searchMovies, search])

  //handle on scroll event for window
  const handleOnScroll = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // console.log(scrollTop, windowHeight, documentHeight)
    if (scrollTop + windowHeight >= documentHeight - 50) {
      // console.log('End of scroll')
      nextPage()
    }
  }, [nextPage])

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [handleOnScroll])

  return (
    <React.Fragment>
      <Header setSearch={setSearch} title={''} />
      <div className="listing-container mt-5">
        <Row>
          {data?.map((e: any, key: number) => (
            <Col md={3} key={key}>
              <Card e={e} />
            </Col>
          ))}
        </Row>
        <ReduxSpinner
          loading={!!loading_upcomingMovies || !!loading_searchMovies}
        />
      </div>
    </React.Fragment>
  )
}

export default Home
