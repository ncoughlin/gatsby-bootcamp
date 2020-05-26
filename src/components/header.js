import React from 'react';
import {Link} from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <div>
            <Link to="/" className={headerStyles.link}>Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/blog"> Blog </Link>
        </div>
    );
}

export default Header;
