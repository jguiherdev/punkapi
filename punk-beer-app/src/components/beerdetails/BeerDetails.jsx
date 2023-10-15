import { useState } from 'react';
import './BeerDetails.css';
import BeerProperties from '../beerproperties/BeerProperties';

function BeerDetails({ beer, onBack }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='beer-details-container'>
            <div className="back-button" onClick={onBack}>&larr;</div>
            <div className="beer-details">
                <div className="beer-header">
                    <img src={beer.image_url} alt={beer.name} />
                    <div className='beer-data'>
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <div className="description-container">
                            <h2>Description</h2>
                            <div className="description-content">
                                <p className='description'>{beer.description}</p>
                            </div>
                        </div>
                        <div className='food-pairing'>
                            <h2>Food Pairing</h2>
                            <ul>
                                {beer.food_pairing.map((food, index) => (
                                    <ul key={index}>{food}</ul>
                                ))}
                            </ul>
                        </div>
                        <div className="brewers-tips">
                            <h2>Brewers Tips</h2>
                            <p>{beer.brewers_tips}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="beer-properties">
                <BeerProperties beer={beer} />
            </div>
        </div>
    );
}

export default BeerDetails;
