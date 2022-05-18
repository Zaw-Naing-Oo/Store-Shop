import React from 'react'
import { CartIcon, Testing } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    // useSelector is created to give instruction for accessing data from the redux store
    // useSelector( (store) => {
    //     console.log(store);
    // });

    // you can access amount like that
    // const amount  = useSelector( (store) => store.cart.amount )

    const { amount } =  useSelector( store => store.cart )


  return (
    <nav>
        <div className='nav-center'>
            <h3>redux toolkit</h3>
            <div className='nav-container'>
                <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar