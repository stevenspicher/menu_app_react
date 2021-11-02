import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import Menu from './components/Menu'
import Order from './components/Order'
import Total from './components/Total'


function App() {

  return (
    <>
  
      <Header/> 
    
       <Menu />
        
       <Order/>
        
      <Total/>
      
   
    
    </>
  );
}

export default App;
