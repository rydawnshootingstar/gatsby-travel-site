import React from 'react';

import styles from '../css/banner.module.css';

/*
    -including children is optional
*/

export default ({title, info, children})=> (
    <div className={styles.banner}>
        <h1>{title}</h1>
        <p>{info}</p>
        {children}
    </div>
)