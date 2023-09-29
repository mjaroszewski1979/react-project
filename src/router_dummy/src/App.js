import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path: '/', element: <HomePage></HomePage>},
      {path: '/products', element: <ProductsPage></ProductsPage>},
      {path: '/products/:productId', element: <ProductDetailPage></ProductDetailPage>}
    ]

  },
])

function App() {
  return <RouterProvider roter={router}></RouterProvider>;
}

export default App;
