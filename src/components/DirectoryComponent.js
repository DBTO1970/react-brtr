import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [
                {
                    id: 0,
                    user: 'user1',
                    have: false,
                    item: "leather work",
                    image: "/assets/img/la-compagnie-robinson-nijXsx-oI7Y-unsplash_sm.png"
                },
            
                {
                    id: 1,
                    user: 'user2',
                    have: true,
                    item: "eggs",
                    image: "/assets/img/kelly-neil-omEpnvmwWz0-unsplash_sm.png"
                },
            
                {
                    id: 2,
                    user: 'user3',
                    have: true,
                    item: "Perfume",
                    image: "/assets/img/katherine-hanlon-mod2s3-qFOc-unsplash_sm.png"
                },
            ],
        };
    }

    render() {
        const directory = this.state.listings.map(listing => {
           
            return (
                <div key={listing.id} className="col">
                    <img src={listing.image} alt={listing.user} />
                    <h2>{listing.user}</h2>
                    <p>{listing.item}</p>
                    <p>{listing.have}</p>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;