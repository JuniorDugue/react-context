import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Welcome from './Welcome'

function Home() {
  return (
    <Jumbotron fluid>
      <Container>
        <Welcome />
      </Container>
    </Jumbotron>
  )
}

export default Home