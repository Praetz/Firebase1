import React from 'react';
import './Main.css';

export default function Main() {
    return (
        <div className='Main-container'>
            <div className='Main-h1'>
                <h1>Main</h1>
            </div>
            <div className='item-container'>
                
                <div>
                    <p class="name">freeCodeCamp</p>
                    <button onclick="changeColor()">Change to Blue</button>
                </div>
            </div>
        </div>
    );
}