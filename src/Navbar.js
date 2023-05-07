import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaOpencart } from 'react-icons/fa';

import ReactCountryFlag from "react-country-flag"
import { useState } from 'react';
import Flags from './Flags';



import { useSelector, useDispatch } from 'react-redux';


const Navbar = ()=>{

    const cart = useSelector(state => state);

    const [flagStatus, setFlagStatus] = useState(false);




const checkFlagStatus = ()=>{
    setFlagStatus(!flagStatus);
}

    return(
       
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            </Link>


            <div className='header__location'>
                <div className='header_topLocation'>
                      <span className='header__deliverto'>Deliver to</span>  
                </div>
                
                <div className='header_bottomLocation'>
                <span className='header__delivertoLocation'><FaMapMarkerAlt className='header__mapIcon' /> Egypt</span>  
                
                </div>
            </div>

            <div className="header__search">
            
                <div className='header__Inputs'>
                <select name="" className='header__Searchselection' id="">
                    <option value="">All</option>
                    <option value="">Games</option>
                    <option value="">Shirts</option>
                    <option value="">Pants</option>
                    <option value="">Shoes</option>
                    <option value="">Electronics</option>
                </select>
                <input type="text" className="header__searchInput" />
                <FaSearch className='header__searchIcon' />
                </div>
            </div>
        






            <button onClick={checkFlagStatus} className='btnFlags'>
                <ReactCountryFlag countryCode="AU" className='flagCountry' svg />
                </button>

{flagStatus ? <Flags /> : null }







            <div className='header__Signin'>
                <div className='header_topSignin'>
                      <span className='header__helloSignin'>Hello, Signin</span>  
                </div>
                
                <div className='header_bottomSignin'>
                <span className='header__accountLists'>Account &amp; Lists</span>  
                
                </div>
            </div>



            <div className='header__retruns'>
                <div className='header_topRetruns'>
                      <span className='header__helloReturns'>Returns</span>  
                </div>
                
                <div className='header_bottomOrders'>
                <span className='header__Orders'>&amp; Orders</span>  
                
                </div>
            </div>



            <div className='header__cart'>
            
                <Link to="/cart" style={{textDecoration: "none"}}>
                <span className='header__cartItemNo'>{cart?.length == 0 ? 0 : cart.length}</span><FaOpencart svg className='header__cartIcon' />
                </Link>
            </div>




        </nav>
    )
}
export default Navbar;