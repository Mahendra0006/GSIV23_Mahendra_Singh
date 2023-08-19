'use client'
import './style.css'
import React, { useEffect, useMemo } from 'react'
import Header from '@/Components/Listing/Header'
import { useParams } from 'next/navigation'
import Api from '@/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import { StarBorderRounded } from '@mui/icons-material'
import ReduxSpinner from '@/Components/Spinner/Redux'
import Image from '@/Components/Image'
import moment from 'moment'

const Home = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const movieDetail = useSelector((state: any) => state?.data?.movieDetail)
  const loading_movieDetail = useSelector(
    (state: any) => state?.data?.loading_movieDetail
  )

  useEffect(() => {
    Api('movieDetail', { id: params?.slug }, dispatch)
  }, [dispatch, params?.slug])

  const rating: string = useMemo(
    () =>
      Number(movieDetail?.vote_average ?? 0)
        ?.toFixed(1)
        ?.toString(),
    [movieDetail?.vote_average]
  )

  return (
    <React.Fragment>
      <Header title={'Movie Details'} />
      <ReduxSpinner
        containerStyle={{ marginTop: '20%' }}
        loading={!!loading_movieDetail}
      />
      {!loading_movieDetail && (
        <Container>
          <Row className="movie-detail">
            <Col lg={2} md={3} sm={4} xs={12}>
              <Image
                alt={movieDetail?.original_title}
                fallbackSrc="/image/movie.png"
                className={'image_poster'}
                src={
                  'https://image.tmdb.org/t/p/original' +
                  movieDetail?.poster_path
                }
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '-webkit-fill-available',
                }}
              />
            </Col>
            <Col lg={10} md={9} sm={8} xs={12} className="pt-4">
              <h2 className="title_text">
                {movieDetail?.original_title ? movieDetail?.original_title : ''}
                <span>
                  ({rating}
                  <StarBorderRounded className="negetive-4" />)
                </span>
              </h2>
              <p className="desc_text">
                <strong>Year:</strong>{' '}
                {movieDetail?.release_date
                  ? moment(movieDetail?.release_date).format('YYYY')
                  : 'NA'}{' '}
                | <strong>Length:</strong>{' '}
                {movieDetail?.length ? movieDetail?.length : 'NA'} |{' '}
                <strong>Director:</strong>{' '}
                {movieDetail?.director ? movieDetail?.director : 'NA'}
              </p>
              <p className="desc_text">
                <strong>Cast:</strong>{' '}
                {movieDetail?.cast ? movieDetail?.cast : 'NA'}
              </p>
              <p className="desc_text">
                <strong>Description: </strong>
                {movieDetail?.overview
                  ? movieDetail?.overview
                  : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  )
}

export default Home
