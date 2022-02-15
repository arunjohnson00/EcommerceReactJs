import React from 'react';
import { Container, Row} from 'react-bootstrap';
import NavBar from './NavBar';

function Header() {
  return (
    <Container fluid>
    <Row>
<NavBar/>
    </Row>
  </Container>
  )
}

export default Header