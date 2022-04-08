import React from 'react'
import { Card, Button } from "react-bootstrap";
import Coupons from './Coupons';

const CustomerCard = (props) => {
  // const mapCoupons = (coupons) =>{
  //     return coupons.map( (coupon, index) =>(
  //       <Button>{coupon.description}</Button>
  //     ))
  // }

  return (
    <React.Fragment>
      <Card className='m-4' border="primary" style={{ width: '28rem' }}>
        <Card.Header><h4>{props.customer.customer.name} </h4></Card.Header>
        <Card.Body>
          <Card.Title>customerId={props.customer.customer.id}</Card.Title>
          <Card.Text>
              {/* {mapCoupons(props.customer.couponArray)} */}
          </Card.Text>
          <Coupons data={props.customer}/>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default CustomerCard;