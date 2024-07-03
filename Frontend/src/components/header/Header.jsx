// src/components/Header.js
import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/logo.png';
import SignInModal from '../modal/SignInModal.jsx';

const headerNav = [
    { display: 'Home', path: '/' },
    { display: 'Movies', path: '/movie' },
    { display: 'TV Series', path: '/tv' }
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div ref={headerRef} className="header">
                <div className="header__wrap container">
                    <div className="logo">
                        <img src={logo} alt="SeriesHub Logo" />
                        <Link to="/">SeriesHub</Link>
                    </div>
                    <ul className="header__nav">
                        {headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    {e.display}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="header__buttons">
                        <button className="sign-in-button" onClick={toggleModal}>
                            Sign In
                        </button>
                        <Link to="/profile" className="profile-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
            {showModal && <SignInModal toggleModal={toggleModal} />}
        </>
    );
};

export default Header;
