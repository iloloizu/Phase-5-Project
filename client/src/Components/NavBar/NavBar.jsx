import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="div_top_hypers">
      <a class="navbar-brand" href="/home">Space City Sneakers</a>
        <ul id="ul_top_hypers">
             <li>
                <NavLink className="li-nav" to="/home" exact>
                    Home
                </NavLink>
            </li>
             <li>
                <NavLink className="li-nav" to="/shop" exact>
                    Buy Shoes
                </NavLink>
            </li>
             <li>
                <NavLink className="li-nav" to="/shoes" exact>
                    Look at Shoes
                </NavLink>
            </li>
             <li>
                <NavLink className="li-nav" to="/news" exact>
                    Sneaker News
                </NavLink>
            </li>
             <li>
                <NavLink className="li-nav" to="/home" exact>
                    My Vault
                </NavLink>
            </li>
             <li>
                <NavLink className="li-nav" to="/profile" exact>
                    Profile
                </NavLink>
            </li>
        </ul>
    </nav>
  )}
