import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserCard from './components/UserCard.jsx';
import App from './App.jsx';
import CreatePost from './components/CreatePost.jsx';
import Post from './components/Post';
import { store } from './app/store.js';
import {Provider} from 'react-redux'
import Signup from './components/Signup.jsx';
import Profile from './components/Profile.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
     <Route>
        <Route path="/" element={<App/>}/>
        <Route path='/usercard' element={<UserCard />} />
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>

  </Provider>
 
)
