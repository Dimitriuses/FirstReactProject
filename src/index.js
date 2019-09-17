import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./Componentrs/Header/Header"
import ContactList from "./Componentrs/ContactList/ContactList"

const App = () =>{
    return(
        <section className="row-section">
        <div className="container">
            <Header/>
            <ContactList/>
        </div>
        </section>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));

