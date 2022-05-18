import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {

  // useSelector( state => console.log(state))

  const { cartItems, isLoading } = useSelector( state => state.cart);
  const { isOpen } = useSelector( state => state.modal);

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(calculateTotal());
  }, [cartItems])

  useEffect( () => {
    // dispatch(getCartItems('zaw'))
    dispatch(getCartItems())
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return(
    <main>
        { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
