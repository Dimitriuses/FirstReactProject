import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./Componentrs/Header/Header"
import ContactList from "./Componentrs/ContactList/ContactList"

const App = () =>{
    let Contacts = [
        {
            name:"Camila Terry",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"50"
        },
        {
            name:"Joel Williamson",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"men",
            image:"42"
        },
        {
            name:"Deann Payne",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"67"
        },
        {
            name:"Leona Hunte",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"51"
        }
    ];
    return(
        <section className="row-section">
        <div className="container">
            <Header/>
            <ContactList items = {Contacts}/>
        </div>
        </section>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));

