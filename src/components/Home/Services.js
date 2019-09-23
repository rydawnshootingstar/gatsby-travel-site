import React from 'react'
import Title from '../Title';
import styles from '../../css/services.module.css';
import services from '../../constants/services';

export default ()=> (
    <section className={styles.services}>
        <Title title={'Our'} subtitle={'Services'}/>
        <div className={styles.center}>
            {
                services.map(({icon, title, text}, index)=> (
                    <article className={styles.service} key={index}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </article>
                ))
            }
        </div>
    </section>
)
