'use client'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Home, Search, ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
import './style.css'
import { FC } from 'react'
import { HeaderProps } from '@/utils/index'

const Header: FC<HeaderProps> = ({ onClick, setSearch, title }) => {
  return (
    <Navbar className="bg-body-tertiary justify-content-between listing-navbar fixed-top">
      <Form>
        <Row>
          {setSearch && (
            <Col md="7" xs="5">
              <Row className="search-container">
                <Col xs={'auto'}>
                  <Search className="grey-light" onClick={onClick && onClick} />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          )}
          {title && (
            <Col xs="7">
              <Link href={'/'}>
                <ArrowBack
                  className="grey-light"
                  onClick={onClick && onClick}
                />
              </Link>
              <Form.Text className="grey header-title">{title}</Form.Text>
            </Col>
          )}
          <Col className="left" xs="5">
            <Link href={'/'}>
              <Home className="grey" onClick={onClick && onClick} />
            </Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}

export default Header
