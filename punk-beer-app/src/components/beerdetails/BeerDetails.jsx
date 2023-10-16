import './BeerDetails.css';
import BeerProperties from '../beerproperties/BeerProperties';

function BeerDetails({ beer, onBack, addToFavorites, removeFromFavorites, favorites }) {

    const isFavorite = favorites.find(fav => fav.id === beer.id);

    return (
        <div className='beer-details-main-container'>
            <div className="navigation-buttons">
                <div className="back-button" onClick={onBack}>&larr;</div>
                <div className='favorite-button' onClick={isFavorite ? () => removeFromFavorites(beer.id) : () => addToFavorites(beer)}>
                    {isFavorite ? "★" : "☆"}
                </div>
            </div>
            <div className='beer-details-container'>
                <div className='beer-header'>
                    <img src={beer.image_url} alt={beer.name} />
                    <div className='name-tagline'>
                        <h1>{beer.name}</h1>
                        <p className='tagline'>{beer.tagline}</p>
                    </div>
                </div>
                <div className="beer-content">
                    <div className='main-content'>
                        <div className="description-container">
                            <h2>Description</h2>
                            <div className='description-content'><p>{beer.description}</p></div>
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
                    <div className="beer-properties">
                        <BeerProperties beer={beer} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeerDetails;
