import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filer(contact => contact.id !== action.payload)
        }
        default: 
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'karen@gmail.com',
                phone: '222-222-2222'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'henrye@gmail.com',
                phone: '999-999-9999'
            },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        };
    }

    render() {
        return (
            <Context.Provider value={ this.state }>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;