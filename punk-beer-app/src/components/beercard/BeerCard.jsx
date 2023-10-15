import './BeerCard.css';

const BeerCard = ({ beer, onSelectBeer }) => {

    return (
        <div className="beer-card" onClick={() => onSelectBeer(beer)}>
            <div className="beer-image-container">
                <img src={beer.image_url} alt={beer.name} className="beer-image" />
            </div>
            <h3 className="beer-name">{beer.name}</h3>
            <p className="beer-tagline">{beer.tagline}</p>
        </div>
    );
}

export default BeerCard;
