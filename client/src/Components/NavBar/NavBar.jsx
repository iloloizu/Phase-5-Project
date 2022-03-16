import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul>
             <li>
                <NavLink className="li-nav" to="/home" exact>
                    Home
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
