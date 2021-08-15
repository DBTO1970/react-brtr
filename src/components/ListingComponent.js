import { render } from '@testing-library/react';
import React, { Component } from 'react';
import LISTINGS from "../shared/listings";



class Listings extends Component {

    constructor(props) {
        super(props);
        this.state ={
            id: props.id,
            user: props.user,
            have: props.have,
            item: props.item
        };
    }
    
    itemList = this.state.data.map((item) => this.item.item);
    
    render(){
        return (
            <div>
            <ul>
                <li>{itemList}</li>
            </ul>
        </div>
        );
    }
}