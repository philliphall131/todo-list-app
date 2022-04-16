// files and utilities
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthAPI from "./utils/auth_utils.js"
// components and pages
import AppNav from './components/AppNav.js'
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Login from './pages/Login';
import CheckLoginPage from './pages/CheckLoginPage';
import SignUpPage from './pages/SignUpPage';
// styling
import { Container } from 'react-bootstrap';

function App() {
  // states
  const [user, setUser] = useState("")
  useEffect(()=>{
		AuthAPI.whoAmI(setUser)
	}, [])

  return (
    <div className="main-body">
      <AppNav user={user} setUser={setUser}/>
      <Container id="main-content" className="my-0 p-3">
          <Routes>
            <Route path="/" element={ <CheckLoginPage user={ user } actualPage={ () => <HomePage user={ user } /> }/>}/>
            <Route path="/lists/:listID" element={ <CheckLoginPage user={ user } actualPage={ () => <TaskListPage user={user}/> }/>}/>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route path="/signup" element={ <SignUpPage user={user} setUser={setUser}/> } />
          </Routes>
      </Container>
    </div>
  );
}

export default App;
