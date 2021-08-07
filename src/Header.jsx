import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import './responsive.css';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { useState } from 'react';


const Header = () =>{
    const [{basket}] = useStateValue();
    const [showLinks, setShowLinks] = useState(false);

    const hemberger = ()=>{
        setShowLinks(!showLinks);
    }

    return (
        <>
        <div className="header">
        <NavLink to='/' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKY8W-m3gCpB6ppQcxGq-GuWJd_71Hu2ckig&usqp=CAU" className="logo" alt="amazon" />
        </NavLink>

        <div className='input_search'>
            <input type="text" className='inpu' />
            <div className='btn' >
            <SearchIcon className='search' />
            </div>
        </div>

        <div className="links" id={showLinks ? "hidden": ""} >
        <NavLink to='/login' className='header_link' >
            <div className='first_link' >
                <span className='sp1' >Hello</span>
                <span className='sp2' >Sign In</span>
            </div>
        </NavLink>
        <NavLink to='/login' className='header_link' >
        <div className='first_link' >
                <span className='sp1' >Returns</span>
                <span className='sp2' >& Orders</span>
            </div>
        </NavLink>
        <NavLink to='/login' className='header_link' >
            <div className='first_link' >
                <span className='sp1' >Your</span>
                <span className='sp2' >Prime</span>
            </div>
        </NavLink>
        <NavLink to='/checkout' className='header_link' >
            <div className='forth_link' >
                <ShoppingBasketIcon />
                <span className='zero'>{basket?.length}</span>
            </div>
        </NavLink>
        </div>

        <div className="berger" onClick={hemberger} >
        <ViewHeadlineIcon style={{fontSize:"35px"}} />
        </div>
        
        </div>
        </>
    );
}
export default Header;

