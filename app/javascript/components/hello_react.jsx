import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default class HelloReact extends React.Component {

  render() {

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    return (
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
      )
  }
}
