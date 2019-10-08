import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Componentrs/Header/Header"
import ContactList from "./Componentrs/ContactList/ContactList"
import AddNewItem from "./Componentrs/AddNewItem/AddNewItem";
import About from "./Componentrs/About/About";
import NotFound from "./Componentrs/NotFound/NotFound"

import { createStore} from "redux";
import reducer from "./Reduser/Reduser";

const storeMy = createStore(reducer);
console.log();

class App extends Component{
    state = {
    List: [
        {
            id:1,
            name:"Camila Terry",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"50",
            favorite: false
        },
        {
            id:2,
            name:"Joel Williamson",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"men",
            image:"42",
            favorite: true
        },
        {
            id:3,
            name:"Deann Payne",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"67",
            favorite: false
        },
        {
            id:4,
            name:"Leona Hunte",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"51",
            favorite: false
        }
    ],
    findContact: ""
    };

    onFavoriteChange = (id) => {
        this.setState(state => {
          const index = this.state.List.findIndex(elem => elem.id === id);
          const newFavorite = this.state.List.slice();
          newFavorite[index].favorite = !newFavorite[index].favorite;
          return {
            favorite: !this.newFavorite
          };
        });
      };
      onSearch = (searchName) => {
        console.log("searchName => ", searchName);
        this.setState({
            findContact: searchName
        });
      }

      onShowContact = (items, searchValue) => {
        if (searchValue.length === 0) {
          return items;
        }
    
        return items.filter(item => {
          return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
      };
    
      onContactDelete = (id) => {
        console.log("onContactDelete => ", id);
        this.setState(state => {
          const index = this.state.List.findIndex(elem => elem.id === id);
    
          const firstPart = this.state.List.slice(0, index);
          const lastPart = this.state.List.slice(index + 1);
          const newList = [...firstPart, ...lastPart];
    
          return {
            List: newList
          };
        });
      }

      onAddNewItem=(name,description,gender,image)=>{
        let object = {
            id:this.state.List.length+1,
            name: name,
            description:description,
            gender:gender,
            image:image,
            favorite:false
        }
        const newContactArr = [
            ...this.state.List,
            object
            ];
        this.setState({
            List:newContactArr
        })
      }

      render() {
        //const { List } = this.state; 
        const showContacts = this.onShowContact(
            this.state.List,
            this.state.findContact
          );
        return (
          <Provider store={storeMy}>
          <section className="row-section">
            <div className="container">
              <Router>
              <Header />
                <Switch>
                  <Route path="/about" exact Component={About}/>
                  <Route path="/" exact render={() => (
                    <ContactList
                    onSearch={this.onSearch}
                  />
                  )}
                />
                <Route
                path="/add"
                exact
                render={() => <AddNewItem addContact={this.onAddNewItem}/>}
              />
                )}/>
                <Route component={NotFound} />
                </Switch>
              </Router>
              {/* <AddNewItem addContact={this.onAddNewItem}/> */}
            </div>
          </section>
          </Provider>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('root'));

