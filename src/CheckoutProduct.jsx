import React from 'react';
import './checkoutproduct.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';

const CheckoutProduct = ({ image, price, title, id }) =>{
    const [{basket}, dispatch] = useStateValue();

    const Remove_from_basket = () =>{
        dispatch({
                type:"REMOVE_FROM_BASKET",
                id: id,
        })
    }
    return(
        <div className="checkoutproduct" >
            <img src={image} alt="" className="checkoutproduct__image" />
            <div className="checkoutproduct__info" >
              <p className="checkoutproduct__title">{title}</p>
              <p className='checkoutproduct__prise'>
                <small className='small1'>$</small>
                <strong className='strong1' >{price}</strong>
              </p> 
              <p className='Ricons1'> 
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
              </p> 
              <button className='buton1' onClick={Remove_from_basket} >Remove from basket</button>    
            </div>
        </div>
    )
}
export default CheckoutProduct;