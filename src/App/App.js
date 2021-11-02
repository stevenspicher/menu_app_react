import './App.css';
import { useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import Menu from './components/Menu/Menu'
import Order from './components/Order'
import Total from './components/Total'


function App() {
  const  [order, setOrder] = useState([]);
  
const handleChange = (item, price) => {
  (setOrder(oldOrder =>  [...oldOrder, {item, price}]))
  console.log(order)
}
  return (
    <>
    <div className="App-header">
      <Header/>
    </div>
    <Container>
      <Row>
        <Col>
          <div className="App">
            <Menu  handleChange={handleChange}/>
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
