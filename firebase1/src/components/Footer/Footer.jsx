import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-h1'>
                <h1>Footer</h1>
                <p className='copyright'>copyright</p>
            </div>
            <div className='item-container'>
                <a href='https://www.google.com/search?q=religous+pictures&oq=religous+pictures&aqs=chrome..69i57j0i10l4j0i10i395l2j0i10j0i10i395l2.15817j1j7&sourceid=chrome&ie=UTF-8'>
                    item 1
                </a>
                <a href='src/images/thecross.jpgy'>item 2</a>
                <a href='src/images/thecross.jpgy'>item 3</a>
            </div>
        </div>
    );
}