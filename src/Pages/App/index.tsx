
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar';
import { ShoppingCardProvider } from '../../Context';
import { CheckOutSideMenu } from '../../Components/CheckOutSideMenu';
import './App.css'

const AppRoutes = () =>{
  const routes = useRoutes([
    {path: '/', element : <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/:category', element: <Home/>},

    {path: '/*', element: <NotFound/>}

  ]);
  return routes
}

const App = ()=> {

  return (
    <ShoppingCardProvider>
        <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCardProvider>
      
  );
}

export default App
