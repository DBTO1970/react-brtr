import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-sm-2 offset-1'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
              
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;