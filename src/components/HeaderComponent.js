import React, { Component } from 'react';
import Login from './LoginComponent';

class Header extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col mt-2 mx-auto">
                        <img src="/assets/img/brtr_logoArtboard1.png" alt="BRTR Logo" width="100%" />
                        <p>In trade, barter is a system of exchange in which participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.</p>
                    </div>
                </div>
                <Login />
            </div>
        );
    } 
}
export default Header;