import styled from '@emotion/styled'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`

const StyledParagraph = styled.p`
  font-size: 2rem;
  color: #646cff;
  
  text-align: center;
  
  padding: 2rem;
  border-radius: 100px;
  border: 1px solid #646cff;
  
  transition: all 0.3s ease;

  &:hover {
    transform: scale(2);
    
  }
`

function App() {
  return (
    <AppContainer>
      <StyledParagraph>
        isobel.se
      </StyledParagraph>
    </AppContainer>
  )
}

export default App
