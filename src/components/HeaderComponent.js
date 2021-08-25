import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron  } from 'reactstrap';


class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col mt-2 mx-auto">
                                <img src="/assets/img/brtr_logoArtboard1.png" alt="BRTR Logo" width="100%" />
                                <p></p>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>In trade, barter is a system of exchange in which participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
                <Navbar dark color="primary">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <NavbarBrand href="/">|BRTR|</NavbarBrand>
                        </div>
                        <div className="row">
                        <div className="col-4">
                        
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </Navbar>
                
        </React.Fragment>
        );
    } 
}
export default Header;