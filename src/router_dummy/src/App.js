import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  {path: '/', element: <HomePage></HomePage>},
  {path: '/products', element: <ProductsPage></ProductsPage>}
])

function App() {
  return <RouterProvider roter={router}></RouterProvider>;
}

export default App;
