import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header>
            <nav className='flex items-center justify-between w-full h-20 fixed border-b-2'>
                <a href="home5.html" class="logo "></a>

                <div class="crombie-logo"></div>
                    
                <button class="boton-login">Login</button>
            </nav>
        </header>
    )
}

export default Header;