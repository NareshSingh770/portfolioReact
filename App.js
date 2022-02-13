import React, { useEffect, useState } from 'react'
import Restuarant from './Restuarants/Restuarant';
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather/Weather';
import NumberRed from './NumberReducer/NumberRed';
import TodoList from './TodoList/TodoList';
import Home from './Home';
import Users from './components/Users';
import SignUp from './Accounts/SignUp';
import SignIn from './Accounts/SignIn';
import ProtectedRoutes from './ProtectedRoutes'
import Header from './components/header/Header';
import Projects from './MiniProjects/Projects';
import Layout from './Layout';



const App = () => {


  const initialValCheck = () => {
    const initialVal = JSON.parse(localStorage.getItem('isAuth'));

    if (!initialVal)
      return false
    else return initialVal
  }

  const [auth, setAuth] = useState(initialValCheck);


  const logIn = () => {

    setAuth(true)

    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }
  const logOut = () => {
    setAuth(false)
    setTimeout(() => {
      window.location.href = '/sign-in'
    }, 1000)
  }



  useEffect(() => {
    localStorage.setItem('isAuth', auth)
  }, [auth])



  return (
    <>

      <div className='content'>
        {auth ? <Header userlogout={logOut} /> : ''}
        <Routes>
          <Route path='/' element={<ProtectedRoutes />} >
            <Route path='/' exact element={<Home />} />
            <Route path='/projects' exact element={<Projects />} />
            <Route path='/projects/restuarant' exact element={<Restuarant />} />
            <Route path='/projects/weather' element={<Weather />} />
            <Route path='/projects/number-with-reducer' element={<NumberRed />} />
            <Route path='/projects/todo-list' element={<TodoList />} />
            <Route path='/users-data' element={<Users />} />
          </Route>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn login={logIn} />} />


        </Routes>

      </div>
    </>
  )
}

export default App
