import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending...',
            message: 'Sending cart data.'
          }));

          const sendRequest = async () => {
            const response = await fetch('firebase-url', { method: 'PUT', body: JSON.stringify(cart)})

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