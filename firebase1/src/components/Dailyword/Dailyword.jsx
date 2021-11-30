/* eslint-disable no-unused-vars */
import React from 'react';
import './Dailyword.css';


const name = document.querySelector(".name");



export default function Dailyword() {
    
        return ( 
            <div>
                <p class="name">freeCodeCamp</p>
                <button onclick="changeColor('blue')" class="blue">Blue</button>
                <button onclick="changeColor('green')" class="green">Green</button>
                <button onclick="changeColor('orangered')" class="orange">Orange</button>
            </div>
            
            )
};


function changeColor (color) {
    name.style.color = color;
}