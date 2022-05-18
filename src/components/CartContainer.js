import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {

    //  useSelector( (store) => console.log(store))

    // Remembeer, when you do destucture from the store, it should same name from the store state.In store, if array property is  with the name of cart, and then you should desturcture with the same name of that array.In this casee, cartItems.
    const { cartItems, amount, total } = useSelector( store => store.cart );


    const dispatch = useDispatch();

    //    You can use like
    // const clCart = () => {
    //     dispatch( clearCart());
    // }
    
    
    // const disFn = () => {
    //     dispatch()
    // }

    if( amount < 1) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
           {/* cart header */}
            <header>
              <h2>your bag</h2>
            </header>
            {/* cartItems */}
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
                </div>
                <button className='btn clear-btn' 
                    onClick={ () => {
                        dispatch(openModal());
                    }
                }
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer