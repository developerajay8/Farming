import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Exports from './Pages/Exports';
import Products from './Pages/Products';
import Sugar from './Pages/Sugar';
import Spices from './Pages/Spices';
import Food from './Pages/Food';
import Tea from './Pages/Tea';
import Pulses from './Pages/Pulses';
import Contact from './Pages/Contact';
import Philosophy from './Pages/Philosophy';
import ApplicationForm from './Pages/ApplicationForm';
import Agro from './Pages/Agro';
import Policy from './Pages/Policy';
import Investor from './Pages/Investor';

function App() {
    const routes = createBrowserRouter([
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/all-product",
            element:<Products/>
          },
          {
            path:"/sugar",
            element:<Sugar/>
          },
          {
            path:"/spices",
            element:<Spices/>
          },
          {
            path:"/food-grains",
            element:<Food/>
          },
          {
            path:"/tea",
            element:<Tea/>
          },
          {
            path:"/pulses",
            element:<Pulses/>
          },
          {
            path:"/philosophy",
            element:<Philosophy/>
          },
          {
            path:"/application-form",
            element:<ApplicationForm/>
          },
          {
            path:"/policy",
            element:<Policy/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/investors",
            element:<Investor/>
          },
          {
            path:"/exports",
            element:<Exports/>
          },
          {
            path:"/agro-feed",
            element:<Agro/>
          }


    ])
    return (
      <>
         <RouterProvider router={routes}/>
      </>
    );
}

export default App;
