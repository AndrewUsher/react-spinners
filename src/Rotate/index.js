import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Ball = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin};
  border-radius: 100%;
  display: inline-block;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: ${props => (props.number % 2 ? '-38px' : '-29px')};
`

const Container = styled.div`
  animation: ${rotateAnimation} 600ms 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  animation-fill-mode: both;
  background-color: ${props => props.color};
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin};
  border-radius: 100%;
  display: inline-block;
  opacity: 0.8;
  position: relative;
`

const Rotate = ({ color, margin, size, ...rest }) => (
  <div {...rest}>
    <Container color={color} size={size} margin={margin}>
      <Ball color={color} size={size} margin={margin} />
      <Ball color={color} size={size} margin={margin} />
    </Container>
  </div>
)

Rotate.defaultProps = {
  color: '#f1f1f1',
  margin: '28px',
  size: '20px'
}

Rotate.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string
}

export default Rotate
