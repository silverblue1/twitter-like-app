import React from 'react'

import '../styles/Status.css';

const reactStringReplace = require('react-string-replace')

const Status = ({text, likes}) => {

    const re = /#(\w+)/g;

    return (
        <div className='post'>
            {
                reactStringReplace(text, re, (match, i) => (
                    <a key={i} href="#">#{match}</a>
                ))
            }
            <br/>
            <span className='likes'>❤ {likes}</span>
        </div>
    )
}

export default Status;