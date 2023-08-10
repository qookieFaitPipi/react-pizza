import React, {useEffect} from 'react';

// components
import Header from '../../Universal/Header/Header';
import CartList from './CartList/CartList';
import CartTotal from './CartTotal/CartTotal';

const CartPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  return (
    <section>
      <Header />
      <CartList />
      <CartTotal />
    </section>
  )
}

export default React.memo(CartPage);