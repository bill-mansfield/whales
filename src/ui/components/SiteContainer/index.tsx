import { FC, ReactChild, ReactChildren, useContext } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background-color: rgba(236, 243, 250, 0.6);
`

const StyledMain = styled.div`
  display: flex;
  flex-grow: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export type SiteContainerProps = {
  children: ReactChild | ReactChildren
}

const SiteContainer: FC<SiteContainerProps> = ({
  children,
}) => {

  return (
    <Container>
      <StyledMain>
        <Wrapper>
          {children}
        </Wrapper>
      </StyledMain>
      {/* <Footer {...footerProps} /> */}
    </Container>
  )
}

export default SiteContainer
