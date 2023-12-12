
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Payment from './components/Payment.jsx';
import Sucess from './components/Sucess.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/payment",
    element:<Payment/>
  },
  {
    path: "/success",
    element:<Sucess/>,
  }
]);

  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);
  
