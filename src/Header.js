import React from 'react';
import './Header.css';
import img1 from './img/amazon_logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
     const [ {basket} ,dispatch] = useStateValue();
  
  return (
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src={img1} alt='right sign'/>
      </Link>
        
        <div className='header_search'>
          <input className="header_searchInput" type='text' />
          <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header_nav'>
             <div className='header__option'>
              <span className='header_optionLineOne'>Hello Guest</span>
              <span className='header_optionLineTwo'>Sign In</span>
             </div>
             <div className='header__option'>
             <span className='header_optionLineOne'>Returns</span>
              <span className='header_optionLineTwo'>& Orders</span>
             </div>
             <div className='header__option'>
             <span className='header_optionLineOne'>Your</span>
              <span className='header_optionLineTwo'>Prime</span>
             </div>
             <Link to='/checkout' >
             <div className='header__optionBasket'>
                 <ShoppingBasketIcon/>
                 <span className='header_optionLineTwo header__basketCount'>{basket.length}</span>
             </div>
             </Link>
             
        </div>
    </div>

  )
}

export default Header