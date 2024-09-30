import React from 'react'
import { Link } from 'react-router-dom';

const LinkComp = ({ to, children }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link to={to} onClick={handleClick}>
            {children}
        </Link>
    );
}

export default LinkComp