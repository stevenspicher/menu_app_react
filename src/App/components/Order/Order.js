
import {ListGroup, Badge, Card} from 'react-bootstrap/';

const Order = (order) => {
 console.log(order.order)
    return (   
        <Card style={{ width: '18rem' }}>
        {order.order.map(item => (    
        <ListGroup as="ol" >
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.item}</div>
            
          </div>
          <Badge variant="primary" pill>
            {item.price}
          </Badge>
        </ListGroup.Item>
      
        </ListGroup>
        )
        )}
        </Card>
    )
}

export default Order