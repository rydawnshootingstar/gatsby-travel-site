import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

import styles from '../css/error.module.css';

/*
    - btn-white lives in layout.css
    - background comes from layout.css as well
*/

export default ()=> (
    <Layout>
        <header className={styles.error}>
            <Banner title={`Oops, there's nothing here!`}>
                <Link to='/' className='btn-white'>
                    Go Home
                </Link>
            </Banner>
        </header>
    </Layout>
)