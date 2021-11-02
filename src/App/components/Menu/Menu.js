import Dropdown from 'react-bootstrap/Dropdown';
import { Card } from 'react-bootstrap'
import {Route, Switch, Link } from 'react-router-dom';
import Drinks from './Menu_pages/Drinks';
import Meals from './Menu_pages/Meals';
import Dessert from './Menu_pages/Dessert';
import Appetizers from './Menu_pages/Appetizers';


const Menu = () => {
    
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
            <Route path= "/action-1"> <Drinks /></Route>
            <Route path= "/action-2"> <Appetizers /></Route>   
            <Route path= "/action-3"> <Meals /></Route>
            <Route path= "/action-4"> <Dessert /></Route> 
        </Switch>
        </div>
        </Card>
        )
}

export default Menu
