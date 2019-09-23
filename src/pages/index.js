import React from 'react';
import { Link } from 'gatsby';

import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import About from '../components/Home/About';
import Services from '../components/Home/Services';


/*
    - btn-white lives in layout.css
*/

export default () => 
    <div>
        <Layout>
            <SimpleHero>
                <Banner title={'Continue Exploring'} info={'Officia cillum sit id eu ipsum amet occaecat consectetur non occaecat eiusmod. Eu ipsum incididunt deserunt enim exercitation ex culpa. Deserunt amet ullamco et labore enim magna aute excepteur sint sunt. Eu do eu irure veniam officia consequat nisi sunt do velit aute consequat sunt. Adipisicing incididunt sunt eu quis sunt anim.'}>
                    <Link to='/tours' className='btn-white'>
                        Explore Tours
                    </Link>
                </Banner>
            </SimpleHero>
            <About></About>
            <Services />
        </Layout>
    </div>
