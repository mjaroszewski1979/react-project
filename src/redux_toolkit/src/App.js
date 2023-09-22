import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    const cartDataSender = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'Sending cart data.'
      }))
      const response = await fetch('firebase-url', { method: 'PUT', body: JSON.stringify(cart)})

      if (!response.ok) {
        throw new Error('Sending data failed!')

      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'Sending cart data successfully.'
      }))
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    cartDataSender().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sending cart data failed.'
      }))
    })
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && <Notification 
        status={notification.status} 
        title={notification.title} 
        message={notification.message}>
        </Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
