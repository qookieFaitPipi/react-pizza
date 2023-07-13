import React, {useEffect} from 'react';

// components
import Header from '../IndexPage/Header/Header';
import CartList from './CartList/CartList';
import CartTotal from './CartTotal/CartTotal';

const CartPage = () => {
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