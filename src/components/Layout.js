import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


import '../css/layout.css';

/*
    -wraps any prop component with a navbar and a footer
    -contains global css selectors
*/

class Layout extends React.Component{

    render(){
        const { children } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                {children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;

