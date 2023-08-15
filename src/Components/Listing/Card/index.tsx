/* eslint-disable react-hooks/rules-of-hooks */
'use client'
/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import { StarBorderRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import './style.css'
import { useCallback } from 'react'

function index({ e }: any) {
  const route = useRouter()
  const onClick = useCallback(() => {
    route?.push('detail/' + e?.id)
  }, [route, e])
  return (
    <Card onClick={onClick} className="movie-card no-padding">
      <Card.Img
        variant="top"
        src={'https://image.tmdb.org/t/p/w500' + e?.poster_path}
        height={240}
        style={{ objectFit: 'cover' }}
      />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="description-title grey">
              {e?.original_title}
            </Card.Title>
          </Col>
          <Col xs={'auto'}>
            <Card.Title className="grey-disabled">
              <StarBorderRounded className="negetive-4" />
              {e?.vote_average}
            </Card.Title>
          </Col>
        </Row>
        <Card.Text className="description grey-light">{e?.overview}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default index
