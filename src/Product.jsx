import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './product.css';
import {useStateValue} from './StateProvider';
import './responsive.css';

const Product = ({title, image, price, id}) =>{
    const [{basket}, dispatch] = useStateValue();
    const Add_to_basket = () =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                image: image,
                price: price,
                id: id,
            }
        })
    }
    return(
        <>
        <div className='product_row1'>
         <div className='product_info'>
            <p className="title">{title}</p>
            <p className='prise'>
                <small className='small'>$</small>
                <strong className='strong' >{price}</strong>
            </p>   
            <p className='Ricons'> 
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
                <strong className='rating'><StarIcon /></strong>
            </p>    
            
         </div>
            <img src={image} alt="products" className='pimage' />
            <button className='buton' onClick={Add_to_basket} >Add to Basket</button>
        </div>
        </>
        
    );
}
export default Product;

