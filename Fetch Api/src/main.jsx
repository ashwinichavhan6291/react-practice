import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'


import App from "./App.jsx";
import PostCard from "./Components/PostCard.jsx";
import RandomUsers from "./Components/RandomUsers.jsx";

const router=createBrowserRouter(

  createRoutesFromElements(
<>
    <Route path="/post" element={<PostCard/> }/>
    <Route path="/" element={<RandomUsers/> }/>
    </>
  )
)



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>
);
