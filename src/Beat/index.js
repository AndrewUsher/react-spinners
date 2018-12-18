import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const beatAnimation = keyframes`
  50% {
    transform: scale(0.75);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const BeatBox = styled.div`
  animation: ${beatAnimation} 700ms ${props => (props.number % 2 ? 0 : 0.35)}s
    infinite linear;
  animation-fill-mode: both;
  display: inline-block;
  background-color: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin};
  border-radius: '100%';
`

const Beat = ({ color, margin, size, ...rest }) => (
  <div {...rest}>
    <BeatBox color={color} margin={margin} size={size} number={1} />
    <BeatBox color={color} margin={margin} size={size} number={2} />
    <BeatBox color={color} margin={margin} size={size} number={3} />
  </div>
)

Beat.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string
}

Beat.defaultProps = {
  color: '#f2f2f2',
  margin: '8px',
  size: '25px'
}

export default Beat
