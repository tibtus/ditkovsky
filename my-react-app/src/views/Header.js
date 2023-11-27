import React, {useState} from 'react';
import logo from './../assets/img/logo_2.png';
import './Header.css';
import {RxCross1, RxHamburgerMenu} from "react-icons/rx";

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <header className="headerBlock">
            <div className="BlockLeft">
                <div><img className="logo" src={logo} alt="logo"/></div>
                <div className="menuBurger" onClick={toggleMenu}>
                    {!isMenuVisible ?
                        <RxHamburgerMenu/> :
                        <RxCross1/>
                    }
                </div>
                <div className={'visibleBurger'}>Головна</div>
                <div className={'visibleBurger'}>Практики</div>
                <div className={isMenuVisible ? 'visibleBurger' : 'hiddenBurger'}>Кейси</div>
                <div className={isMenuVisible ? 'visibleBurger' : 'hiddenBurger'}>Блог</div>
                <div className={isMenuVisible ? 'visibleBurger' : 'hiddenBurger'}>Контакти</div>
            </div>

            {!isMenuVisible ?
                <div className="BlockMiddle"></div> : null
            }

            <div className="BlockRight">
                <div className="text">
                    social
                </div>
            </div>
        </header>
    );
}

export default Header;
