import React from 'react';
import { Button } from "reactstrap";

export default function Login() {
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col mx-auto">
                        <Button className="col-3 mx-1">Login</Button>
                        <Button className="col-3 mx-1">Browse</Button>
                        <Button className="col-3 mx-1">Join</Button>
                    </div>
                </div>
            </div>
        );
    }
