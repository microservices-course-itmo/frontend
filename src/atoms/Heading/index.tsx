import React, { PropsWithChildren } from 'react'
import { StyleProp } from 'react-native'
import styled from 'styled-components/native'

interface HeadingProps {
  style?: StyleProp<any>
}

function Heading({
  children,
  style,
}: PropsWithChildren<HeadingProps>): JSX.Element {
  return (
    <H accessibilityRole='header' style={style}>
      {children}
    </H>
  )
}

export default Heading

const H = styled.Text`
  font-family: PlayfairDisplay_700Bold;
  font-weight: 700;
  font-size: 20px;
`
