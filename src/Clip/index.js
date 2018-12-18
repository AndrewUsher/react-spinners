import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const clipAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`

const ClipLoader = styled.div`
  animation: ${clipAnimation} 750ms 0s infinite linear;
  animation-fill-mode: both;
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  border: 3px solid;
  border-color: ${props => props.color};
  border-bottom-color: transparent;
  border-radius: 100%;
  background: transparent !important;
`

const Clip = ({ color, size, ...rest }) => (
  <div {...rest}>
    <ClipLoader color={color} size={size} />
  </div>
)

Clip.defaultProps = {
  color: '#f2f2f2',
  size: '45px'
}

Clip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

export default Clip
