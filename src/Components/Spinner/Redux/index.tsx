import React, { CSSProperties, memo } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import '../style.css'

interface props {
  loading?: boolean
  containerStyle?: CSSProperties
  [key: string]: any //other spinner props
}

const ReduxSpinner = ({ loading, containerStyle, ...spinnerProps }: props) => {
  return (
    <React.Fragment>
      {!!loading && (
        <div className={'redux-spinner'} style={containerStyle ?? {}}>
          <Spinner animation="border" {...spinnerProps} />
        </div>
      )}
    </React.Fragment>
  )
}

export default memo(ReduxSpinner)
