import fullMenu from '../assets/menu'
import Dropdown from 'react-bootstrap/Dropdown';
import { Card } from 'react-bootstrap'
import {Route, Switch, Link } from 'react-router-dom';
import Drinks from './Drinks';
import Meals from './Meals';
import Dessert from './Dessert';
import Appetizers from './Appetizers';


const Menu = ( {handleChange}) => {
    
    return (
        <Card style={{ width: '25rem' }}>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
            <Dropdown.Item> <Link to= "/action-1">Drinks</Link></Dropdown.Item>
            <Dropdown.Item> <Link to= "/action-2">Appetizers</Link></Dropdown.Item>
            <Dropdown.Item> <Link to= "/action-3">Meals</Link></Dropdown.Item>
            <Dropdown.Item> <Link to= "/action-4">Dessert</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div>
        <Switch>
            <Route path= "/action-1"> <Drinks menu={fullMenu[0]} handleChange={handleChange}/></Route>
            <Route path= "/action-2"> <Appetizers menu={fullMenu[1]} handleChange={handleChange}/></Route>   
            <Route path= "/action-3"> <Meals menu={fullMenu[2]} handleChange={handleChange}/></Route>
            <Route path= "/action-4"> <Dessert menu={fullMenu[3]} handleChange={handleChange}/></Route> 
        </Switch>
        </div>
        </Card>
        )
}

export default Menu
