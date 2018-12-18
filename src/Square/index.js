import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const boxAnimation = keyframes`
  25% {
    transform: rotateX(180deg) rotateY(0);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(0) rotateY(180deg);
  }
  100% {
    transform: rotateX(0) rotateY(0);
  }
`

const Box = styled.div`
  animation: ${boxAnimation} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation-fill-mode: both;
  background-color: ${props => props.color};
  display: inline-block;
  height: ${props => props.size};
  margin: ${props => props.margin};
  perspective: 100px;
  width: ${props => props.size};
`

const Square = ({ color, margin, size, ...rest }) => (
  <div {...rest}>
    <Box color={color} margin={margin} size={size} />
  </div>
)

Square.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string
}

Square.defaultProps = {
  color: '#f2f2f2',
  margin: '5px',
  size: '20px'
}

export default Square
