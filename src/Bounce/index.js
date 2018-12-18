import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.0);
  }
`

const BounceContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
`
const BounceItem = styled.div`
  animation: ${bounceAnimation} 2s ${props => (props.number === 1 ? 1 : 0)}s
    infinite ease-in-out;
  animation-fill-mode: both;
  background-color: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: '100%';
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: calc(
    50vw -
      ${props =>
        props.size.replace('px', '') - props.size.replace('px', '') / 3}px
  );
`
const Bounce = ({ color, size, ...rest }) => (
  <div {...rest}>
    <BounceContainer size={size}>
      <BounceItem size={size} color={color} number={1} />
      <BounceItem size={size} color={color} number={2} />
    </BounceContainer>
  </div>
)

Bounce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

Bounce.defaultProps = {
  color: '#f2f2f2',
  size: '60px'
}

export default Bounce
