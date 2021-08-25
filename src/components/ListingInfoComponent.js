import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class ListingInfo extends Component {
    
    renderListing(listing) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={listing.image} alt={listing.item} />
                    <CardBody>
                        <CardTitle>{listing.name}</CardTitle>
                        <CardText>{listing.item}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    render() {
        
        if (this.props.listing) {
            return (
                <div className="row">
                    {this.renderListing(this.props.listing)}
                </div>
            );
        } else {
        return (
            <div></div>
        );
        }
    }

}
export default ListingInfo;