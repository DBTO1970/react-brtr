import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({listing}) {
    return (
        
            <Card >
                <Link to={`/directory/${listing.id}`}>
                    <CardImg width="100%" src={listing.image} alt={listing.name} />
                        <CardImgOverlay>
                            <CardTitle>{listing.name}</CardTitle>
                                
                        </CardImgOverlay>
                </Link>
            </Card>
        
    );
}
function Directory (props) {
    
        const directory = props.listings.map(listing => {
        return (
            <div key={listing.id} className="col-md-5 m-1">
                <RenderDirectoryItem listing ={listing} />
            </div>
        );
    });

    return(
        <div className="container">
        <div className='row'>
            <div className='col'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Listings</BreadcrumbItem>
                </Breadcrumb>
                <h2>Listings</h2>
                <hr />
            </div>
        </div>
            <div className="row">
                {directory}
            </div>
            
        </div>
    );
    
}


export default Directory;