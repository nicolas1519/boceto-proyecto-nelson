import React from 'react';

import './Header.css';

//Ruteos
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const goToAbout = () => {

        navigate("/about", {

            replace: true
            
        });

    }

    return (
        
        <header>

            <div className='wrapperHeader'>

                <div className='containerHeader'>
                    
                    <img className="logoIcon" src="https://cdn.pixabay.com/photo/2013/07/12/16/59/linux-151619_1280.png" alt="" />

                    <nav>
                        <NavLink to="/home">Home</NavLink>
                        <p onClick={ goToAbout }>About</p>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>

                    <div className='otherOptions'>

                        <div className='itemOtherOptions'></div>
                        <div className='itemOtherOptions'></div>
                        <div className='itemOtherOptions'></div>

                    </div>

                </div>

            </div>

        </header>

    )

}

export default Header;