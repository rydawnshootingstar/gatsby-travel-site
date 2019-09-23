import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../../static/images/defaultBcg.jpeg';



/*
    - title to be used in every component
*/
export default ()=> (
    <section className={styles.about}>
        <Title title={'About'} subtitle={'Us'} />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <img src={img} alt="about the company"/>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the world</h4>
                    <p>Fugiat ad deserunt proident ut occaecat nulla officia cillum do. Quis ipsum consectetur dolore sint esse excepteur esse ipsum ipsum ipsum enim amet adipisicing. Adipisicing magna ex sunt et sunt et qui aute id mollit fugiat. Nisi minim non anim ullamco aliqua occaecat exercitation fugiat deserunt aliqua aliqua ea officia. Et pariatur minim mollit sit ex. Ullamco magna labore ea dolore elit.</p>
                    <p>Fugiat ad deserunt proident ut occaecat nulla officia cillum do. Quis ipsum consectetur dolore sint esse excepteur esse ipsum ipsum ipsum enim amet adipisicing. Adipisicing magna ex sunt et sunt et qui aute id mollit fugiat. Nisi minim non anim ullamco aliqua occaecat exercitation fugiat deserunt aliqua aliqua ea officia. Et pariatur minim mollit sit ex. Ullamco magna labore ea dolore elit.</p>
                    <button type="button" className="btn-primary">read more...</button>
                </article>
            </div>

    </section>
)