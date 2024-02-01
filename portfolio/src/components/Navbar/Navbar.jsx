import React from "react";
import { useState } from "react";
import './Navbar.css';
import logo from '../../img/logo.jpg'; // Adjust the path based on your project structure
import contactimg from '../../img/contact.png';
import {Link} from 'react-scroll';
import menu from '../../img/menu.jpg';


const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="desktopMenu">
                    <Link activeClass = 'active' to = 'intro' spy ={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass = 'active' to = 'skills' spy ={true} smooth={true} offset={-50} duration = {500}className="desktopMenuListItem">About</Link>
                    <Link activeClass = 'active' to = 'works' spy ={true} smooth={true} offset={-100} duration = {500}className="desktopMenuListItem">Portfolio</Link>
                    <Link activeClass = 'active' to = 'clients' spy ={true} smooth={true} offset={-50} duration = {500}className="desktopMenuListItem">Clients</Link>
                    <Link activeClass = 'active' to = 'projects' spy ={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem">Projects</Link>
                </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src={contactimg} alt="contact" className="desktopMenuImg" />Contact Me
                </button>



                <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
                <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                    <Link activeClass = 'active' to = 'intro' spy ={true} smooth={true} offset={-100} duration = {500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass = 'active' to = 'skills' spy ={true} smooth={true} offset={-50} duration = {500}className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
                    <Link activeClass = 'active' to = 'works' spy ={true} smooth={true} offset={-100} duration = {500}className="listItem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
                    <Link activeClass = 'active' to = 'clients' spy ={true} smooth={true} offset={-50} duration = {500}className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                    <Link activeClass = 'active' to = 'contacts' spy ={true} smooth={true} offset={-50} duration = {500}className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
                    <Link activeClass = 'active' to = 'projects' spy ={true} smooth={true} offset={-100} duration = {500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                </div>


            </nav>
        </div>
    );
}

export default Navbar;
