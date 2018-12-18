import React from 'react'
import { storiesOf } from '@storybook/react'
import { Beat, Bounce, Clip, Rotate, Scale, Square, Sync } from '../src'

storiesOf('Beat', module)
  .add('Default', () => <Beat />)
  .add('Purple', () => <Beat color="#9692af" />)
  .add('Green', () => <Beat color="#cdeeaa" />)
  .add('Dark Blue', () => <Beat color="#1b335f" />)
  .add('Medium', () => <Beat color="#1b335f" size="40px" />)
  .add('Large', () => <Beat color="#1b335f" size="60px" />)

storiesOf('Bounce', module)
  .add('Default', () => <Bounce />)
  .add('Purple', () => <Bounce color="#9692af" />)
  .add('Green', () => <Bounce color="#cdeeaa" />)
  .add('Dark Blue', () => <Bounce color="#1b335f" />)
  .add('Medium', () => <Bounce color="#1b335f" size="40px" />)
  .add('Large', () => <Bounce color="#1b335f" size="60px" />)

storiesOf('Clip', module)
  .add('Default', () => <Clip />)
  .add('Purple', () => <Clip color="#9692af" />)
  .add('Green', () => <Clip color="#cdeeaa" />)
  .add('Dark Blue', () => <Clip color="#1b335f" />)
  .add('Medium', () => <Clip color="#1b335f" size="40px" />)
  .add('Large', () => <Clip color="#1b335f" size="60px" />)

storiesOf('Rotate', module)
  .add('Default', () => <Rotate />)
  .add('Purple', () => <Rotate color="#9692af" />)
  .add('Green', () => <Rotate color="#cdeeaa" />)
  .add('Dark Blue', () => <Rotate color="#1b335f" />)
  .add('Medium', () => <Rotate color="#1b335f" size="40px" />)
  .add('Large', () => <Rotate color="#1b335f" size="60px" />)

storiesOf('Scale', module)
  .add('Default', () => <Scale />)
  .add('Purple', () => <Scale color="#9692af" />)
  .add('Green', () => <Scale color="#cdeeaa" />)
  .add('Dark Blue', () => <Scale color="#1b335f" />)
  .add('Medium', () => <Scale color="#1b335f" width="10px" height="40px" />)
  .add('Large', () => <Scale color="#1b335f" width="20px" height="80px" />)

storiesOf('Square', module)
  .add('Default', () => <Square />)
  .add('Purple', () => <Square color="#9692af" />)
  .add('Green', () => <Square color="#cdeeaa" />)
  .add('Dark Blue', () => <Square color="#1b335f" />)
  .add('Medium', () => <Square color="#1b335f" size="40px" />)
  .add('Large', () => <Square color="#1b335f" size="60px" />)

storiesOf('Sync', module)
  .add('Default', () => <Sync />)
  .add('Purple', () => <Sync color="#9692af" />)
  .add('Green', () => <Sync color="#cdeeaa" />)
  .add('Dark Blue', () => <Sync color="#1b335f" />)
  .add('Medium', () => <Sync color="#1b335f" size="40px" />)
  .add('Large', () => <Sync color="#1b335f" size="60px" />)
