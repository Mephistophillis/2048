import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Layout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Main>
        <Content>{children}</Content>
      </Main>
    )
  }
}

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::only-child {
    width: 50px;
    height: 50px;
  }
`

export default Layout
