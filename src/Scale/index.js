import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const scaleAnimation = keyframes`
  0% {
    transform: scaleY(1.0);
  }
  50% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1.0);
  }
`

const ScaleBox = styled.div`
  animation: ${scaleAnimation} 1s ${props => props.number * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
  background-color: ${props => props.color};
  border-radius: ${props => props.radius};
  display: inline-block;
  height: ${props => props.height};
  margin: ${props => props.margin};
  width: ${props => props.width};
`

const Scale = ({ color, height, margin, radius, width, ...rest }) => (
  <div {...rest}>
    <ScaleBox
      radius={radius}
      color={color}
      margin={margin}
      height={height}
      width={width}
      number={1}
    />
    <ScaleBox
      radius={radius}
      color={color}
      margin={margin}
      height={height}
      width={width}
      number={2}
    />
    <ScaleBox
      radius={radius}
      color={color}
      margin={margin}
      height={height}
      width={width}
      number={3}
    />
    <ScaleBox
      radius={radius}
      color={color}
      margin={margin}
      height={height}
      width={width}
      number={4}
    />
    <ScaleBox
      radius={radius}
      color={color}
      margin={margin}
      height={height}
      width={width}
      number={5}
    />
  </div>
)

Scale.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  radius: PropTypes.string
}

Scale.defaultProps = {
  color: '#f3f3f3',
  height: '35px',
  margin: '2px',
  radius: '2px',
  width: '4px'
}

export default Scale
