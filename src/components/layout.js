import React from 'react';

import '../styles/index.scss';
import layoutStyles from './layout.module.scss';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
