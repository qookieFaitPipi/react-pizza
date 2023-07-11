import React from 'react';

// components
import Header from '../IndexPage/Header/Header';
import CartList from './CartList/CartList';

const CartPage = () => {
  return (
    <section>
      <Header />
      <CartList />
    </section>
  )
}

export default React.memo(CartPage);