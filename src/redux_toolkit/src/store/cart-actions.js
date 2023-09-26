import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('backend-url')
       

        if (!response.ok) {
            throw new Error('Error occured!')
        }

        const data = response.json()
        return data
    };

    try {
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
        }))
    } catch(error) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error...',
            message: 'Fetching cart data failed.'
        }))
    }

    };

};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending...',
            message: 'Sending cart data.'
          }));

          const sendRequest = async () => {
            const response = await fetch('firebase-url', { method: 'PUT', body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity,
            })})

            if (!response.ok) {
              throw new Error('Sending data failed!')
      
            }
          };

          try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sending cart data successfully.'
              }));

          } catch (error) {

            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed.'
              }))
          }
        }
    };