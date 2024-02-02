import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Pages/Post/Posts';
import Header from './Component/header/Header';
import Comments from './Pages/Comments/Comments';
import Photos from './Pages/Photos/Photos';
import { Routes, Route } from'react-router-dom';
import Album from './Pages/Album/Album';
import Todo from './Pages/Todos/Todo';
import Users from './Pages/Users/Users';
function App() {
  return (
    <div>
      <Header></Header>
      <div className="App">
      <Routes>
        <Route path="/" element={ <Posts/> } />
        <Route path="/Comments" element={ <Comments/> } />
        <Route path="/Photos" element={ <Photos/> } />
        <Route path="/Album" element={ <Album/> } />
        <Route path="/todos" element={ <Todo/> } />
        <Route path="/user" element={ <Users/> } />
      </Routes>

    </div>
    </div>
  );
}

export default App;
