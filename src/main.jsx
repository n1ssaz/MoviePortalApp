import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Favourite from './routes/Favourite'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchAppBar from './components/AppBar'
import WatchLater from './routes/WatchLater';
import Genres from './routes/Genres';
import { Outlet } from 'react-router-dom';
import Movie from './routes/Movie';
import Years from './routes/Years';
import InfiniteScrollRoute from './routes/InfiniteScroll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchAppBar><Outlet /> </SearchAppBar> ,
    children:[
      {
        path: "",
        element: <App></App>
      },
      {
        path: "favourites",
        element: <Favourite></Favourite>
      },
      {
        path: "WatchLater",
        element: <WatchLater></WatchLater>
      },
      {
        path: "Genres/:genre",
        element: <Genres></Genres>
      },
      {
        path: "Movie/:movie",
        element: <Movie></Movie>
      },
      {
      path: "Years/:year",
      element: <Years></Years>
    },

    {
      path: "InfiniteScroll/",
      element: <InfiniteScrollRoute></InfiniteScrollRoute>
    },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <RouterProvider router={router} >
</RouterProvider>
     </PersistGate>
     </Provider>
  </React.StrictMode>,
 
)
