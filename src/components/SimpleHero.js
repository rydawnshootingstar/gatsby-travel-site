import React from 'react';

/*
    - defaultHero lives in layout.css
        - image is being selected via css url 
*/

export default ({children})=> (
    <header className='defaultHero'>
        {children}
    </header>
)