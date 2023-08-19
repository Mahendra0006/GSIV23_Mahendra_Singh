'use client'
import './style.css'
import React, { useEffect } from 'react'
import Header from '@/Components/Listing/Header'
import { useParams } from 'next/navigation'
import Api from '@/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { StarBorderRounded } from '@mui/icons-material'
import Card from 'react-bootstrap/Card'
import { Moviedata } from '@/utils/index'

const Home: React.FC<Moviedata> = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const movieDetail = useSelector((state: any) => state?.data?.movieDetail)
  const loading_movieDetail = useSelector(
    (state: any) => state?.data?.loading_movieDetail
  )

  console.log('loading', loading_movieDetail)

  useEffect(() => {
    Api('movieDetail', { id: params?.slug }, dispatch)
  }, [dispatch, params?.slug])

  const imageUrl: any =
    'https://image.tmdb.org/t/p/original' + movieDetail?.poster_path

  const number: number = movieDetail?.vote_average
  const rating = number?.toFixed(1)

  return (
    <React.Fragment>
      <Container>
        <Header title={'Movie Details'} />
        <Row className="movie-detail">
          <Col md={3} xs={12}>
            <Card.Img
              src={imageUrl ? imageUrl : ''}
              className="image_poster"
              alt="movie_poster"
              height={250}
              style={{ objectFit: 'contain' }}
            />
          </Col>
          <Col md={9} xs={12}>
            <h2 className="title_text">
              {movieDetail?.original_title ? movieDetail?.original_title : ''}
              <span>
                ({rating}
                <StarBorderRounded className="negetive-4" />)
              </span>
            </h2>
            <p className="desc_text">
              <strong>Year:</strong>
              {movieDetail?.release_date
                ? movieDetail?.release_date
                : 'Not Available'}
              |<strong>Length:</strong>
              {movieDetail?.length ? movieDetail?.length : ' Not Available'}|
              <strong>Director:</strong>
              {movieDetail?.director ? movieDetail?.director : ' Not Available'}
            </p>
            <p className="desc_text">
              <strong>Cast:</strong>{' '}
              {movieDetail?.cast ? movieDetail?.cast : 'Not Available'}
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
    </React.Fragment>
  )
}

export default Home
