import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import Menu from './components/Menu'
import Order from './components/Order'
import Total from './components/Total'


function App() {

  return (
    <>
    <div className="App-header">
      <Header/>
    </div>
    <Container>
      <Row>
        <Col>
          <div className="App">
            <Menu />
          </div>
        </Col>
        <Col>
          <div className="App">
            <Order/>
          </div>
        </Col>
        <Col>
          <div className="App">
            <Total/>
          </div>
        </Col>
      </Row>
    </Container>
   
    
    </>
  );
}

export default App;
