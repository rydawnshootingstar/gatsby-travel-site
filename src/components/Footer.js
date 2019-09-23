import React from 'react';
import { Link } from 'gatsby';

import styles from '../css/footer.module.css';
import links from '../constants/links';
import social from '../constants/social-icons';


class Footer extends React.Component{

    render(){
        return (
            <footer className={styles.footer}>
                <div className={styles.links}>

                {links.map(({path, text}, index)=> (
                    <Link key={index} to={path}>{text}</Link>
                ))}
                
                </div>
                
                <div className={styles.icons}>
                {
                    social.map(({icon, url}, index)=> (
                        <a key={index} href={url} target="blank" rel="noopener noreferrer">{icon}</a>
                    ))
                }
                </div>

                <div className={styles.copyright}> &copy; {new Date().getFullYear()} Backroads Tours</div>
            </footer>
        )
    }
}

export default Footer;