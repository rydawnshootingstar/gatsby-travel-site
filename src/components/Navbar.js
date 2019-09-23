import React from 'react';
import { Link } from 'gatsby';
import {FaAlignRight} from 'react-icons/fa';
import styles from '../css/navbar.module.css';

import links from '../constants/links';
import social from '../constants/social-icons';

import logo from '../../static/images/logo.svg';

/*
    - isOpen tracks whether or not the small screen hamburger menu is open
        - toggling changes css class
*/

class Navbar extends React.Component{

    state = {
        isOpen: false
    }

    toggleOpen = ()=> {
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){

        const {isOpen}=this.state;
        return (
            <div>
                <nav className={styles.navbar}>
                    <div className={styles.center}>
                        <div className={styles.header}>
                            <img src={logo} alt="logo"/>

                            <button type="button" className={styles.logoBtn}>
                                <FaAlignRight className={styles.logoIcon} onClick={this.toggleOpen}/>
                            </button>
                        </div>
                        {/* .links has height:0, .showNav has a fixed height 
                        (essentially this is "hidden" vs "displayed") */}
                        <ul className={isOpen ? `${styles.links} ${styles.showNav}` : styles.links }>
                            {
                                links.map(({path, text}, index)=> (
                                    <li key={'links'+index} ><Link to={path}>{text}</Link></li>
                                ))
                            }
                        </ul>
                        <div className={styles.socialLinks}>
                            {
                                social.map(({icon, url}, index)=> (
                                    <a key={'social'+index} href={url} target="blank" rel="noopener noreferrer">{icon}</a>
                                ))
                            }
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;