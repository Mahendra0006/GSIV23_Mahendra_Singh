/* eslint-disable react-hooks/rules-of-hooks */
'use client'
/* eslint-disable react/no-unescaped-entities */
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import { StarBorderRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import './style.css'
import { useCallback } from 'react'
import { Moviedata } from '@/utils/index'
import Image from '@/Components/Image'
interface IndexProps {
  e: Moviedata
}

const index: React.FC<IndexProps> = ({ e }) => {
  const route = useRouter()

  const onClick = useCallback(() => {
    route?.push('detail/' + e?.id)
  }, [route, e])

  return (
    <Card onClick={onClick} className="movie-card no-padding">
      <Image
        alt={e?.original_title}
        fallbackSrc="/image/movie.png"
        className={'card-img-top'}
        src={'https://image.tmdb.org/t/p/original' + e?.poster_path}
        height={240}
        style={{ objectFit: 'cover' }}
      />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="description-title grey">
              {e?.original_title ? e?.original_title : ''}
            </Card.Title>
          </Col>
          <Col xs={'auto'}>
            <Card.Title className="grey-disabled">
              ({e?.vote_average ? e?.vote_average : 0}
              <StarBorderRounded className="negetive-4" />)
            </Card.Title>
          </Col>
        </Row>
        <Card.Text className="description grey-light">
          {e?.overview
            ? e?.overview
            : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default index
