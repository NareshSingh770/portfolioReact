import React from 'react'
import Header from './components/header/Header'
import Restuarant from './Restuarants/Restuarant';
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather/Weather';
import NumberRed from './NumberReducer/NumberRed';
import TodoList from './TodoList/TodoList';
import Home from './Home';
import Users from './components/Users';
import Projects from './MiniProjects/Projects';
import ProtectedRoutes from './ProtectedRoutes'

const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                {/* <Route path='/' element={<ProtectedRoutes />} >
                    <Route path='/' exact element={<Home />} />
                    <Route path='/projects' exact element={<Projects />} />
                    <Route path='/projects/restuarant' exact element={<Restuarant />} />
                    <Route path='/projects/weather' element={<Weather />} />
                    <Route path='/projects/number-with-reducer' element={<NumberRed />} />
                    <Route path='/projects/todo-list' element={<TodoList />} />
                    <Route path='/users-data' element={<Users />} />
                </Route> */}
            </Routes>

        </>
    )
}

export default Layout
