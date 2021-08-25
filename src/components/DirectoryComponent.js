import React, { Component } from 'react';
import { Card} from '@material-ui/core';
import { CardImg, CardImgOverlay, CardTitle  } from 'reactstrap';
import ListingInfo from './ListingInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedListing: null
        };
    }

    onListingSelect(listing) {
        this.setState({selectedListing: listing});
    }

    

    render() {
        const directory = this.props.listings.map(listing => {
           
            return (
                <div key={listing.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onListingSelect(listing)}>
                        <CardImg width="100%" src={listing.image} alt={listing.item} />
                        <CardImgOverlay>
                        <CardTitle>{listing.user} - {listing.item}</CardTitle>
                        
                        
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <ListingInfo listing={this.state.selectedListing} />
            </div>
        );
    }
}


export default Directory;