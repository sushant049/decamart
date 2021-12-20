import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from './ProductBox.module.scss';
import { Card, Button } from 'react-bootstrap';
import {addToCart, removeFromCart} from '../../redux/actions/actions';

function Product({details}) {
    const dispatch = useDispatch();
    const cart = useSelector(({decaMart}) => decaMart?.cartItems);
    
    return (
        <Card className={Styles.CardContainer}>
            <Card.Img variant="top" src={details?.image} className={Styles.Image} />
            <Card.Body>
                <Card.Title className={Styles.Title}>{details?.title}</Card.Title>
                <Card.Text className={Styles.Price}>₹{details?.price}</Card.Text>
                {
                    cart && cart?.map(item => item.id).includes(details?.id) ? 
                    <Button variant="secondary" className={Styles.CartButton} onClick={()=>dispatch(removeFromCart(details?.id))}>
                        Remove from cart
                    </Button> :
                    <Button variant="primary" className={Styles.CartButton} onClick={()=>dispatch(addToCart(details))}>
                        Add to cart
                    </Button> 
                }
            </Card.Body>
        </Card>
    )
}

// const mapStateToProps = ({decaMart}) => {
//     return { cart: decaMart.cartItems };
// };

export default Product;