import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Footer extends Component {
    render (){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <ButtonGroup className="mx-auto">
                            <div className="col">
                    <Button data-toggle="modal" data-target="#sign-up-modal">
                        <i className="fa fa-user-plus p-1"></i> Join | BRTR | </Button>
                </div>
                <div className="col">
                <Button data-toggle="modal" data-target="#loginModal" >
                    <i className="fa fa-sign-in p-1"></i>Member Log-in</Button>
                </div>
            </ButtonGroup>
            </div>
            
            <p>&copy;2021 Don Barto</p>
        </div>
      </React.Fragment>
        );
    }
}

export default Footer;