import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const syncAnimation = keyframes`
  33% {
    transform: translateY(10px);
  }

  66% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
`

const Ball = styled.div`
  animation: ${syncAnimation} 600ms ${props => props.number * 0.07}s infinite
    ease-in-out;
  animation-fill-mode: both;
  background-color: ${props => props.color};
  border-radius: '100%';
  display: inline-block;
  height: ${props => props.size};
  margin: ${props => props.margin};
  width: ${props => props.size};
`

const Sync = ({ color, margin, size, ...rest }) => (
  <div {...rest}>
    <Ball color={color} margin={margin} number={1} size={size} />
    <Ball color={color} margin={margin} number={2} size={size} />
    <Ball color={color} margin={margin} number={3} size={size} />
  </div>
)

Sync.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string
}

Sync.defaultProps = {
  color: '#f2f2f2',
  margin: '5px',
  size: '20px'
}

export default Sync
