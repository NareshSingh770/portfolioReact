import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ColorsTheme from './ColorsTheme'

const Header = (props) => {

    const applyColorTheme = (e) => {



        localStorage.setItem('theme-color', e.target.style.backgroundColor);

        document.querySelector(':root').style.setProperty('--bs-danger', e.target.style.backgroundColor);

    }

    useEffect(() => {

        const colorSetted = localStorage.getItem('theme-color');

        if (colorSetted) {
            document.querySelector(':root').style.setProperty('--bs-danger', colorSetted);
        }


    })
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
                <div className="container-fluid justify-content-between">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users-data">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sign-up">Create Account</NavLink>
                        </li>
                    </ul>
                    <ColorsTheme changeColor={applyColorTheme} />
                    <button className='btn btn-outline-warning text-warning logout-btn' onClick={props.userlogout}><i class="fa fa-power-off" aria-hidden="true"></i></button>
                </div>
            </nav>
        </>
    )
}

export default Header
