import './BeerProperties.css';

const BeerProperties = ({ beer }) => {
    return (
        <div className="beer-properties-container">
            <div className="beer-properties">
                <h3>Beer Properties</h3>
                <p><small>First Brewed: {beer.first_brewed}</small></p>
                <p><strong>ABV:</strong> {beer.abv}</p>
                <p><strong>IBU:</strong> {beer.ibu}</p>
                <p><strong>Target FG:</strong> {beer.target_fg}</p>
                <p><strong>Target OG:</strong> {beer.target_og}</p>
                <p><strong>EBC:</strong> {beer.ebc}</p>
                <p><strong>SRM:</strong> {beer.srm}</p>
                <p><strong>pH:</strong> {beer.ph}</p>
                <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
                <p><strong>Volume:</strong> {beer.volume.value} {beer.volume.unit}</p>
                <p><strong>Boil Volume:</strong> {beer.boil_volume.value} {beer.boil_volume.unit}</p>
            </div>
            <div className="beer-ingredients">
                <h3>Beer Ingredients</h3>
                <p><strong>Hops:</strong></p>
                <ul>
                    {beer.ingredients.hops.map((hop, index) => (
                        <ul key={index}>{hop.name}</ul>
                    ))}
                </ul>
                <p><strong>Malt:</strong></p>
                <ul>
                    {beer.ingredients.malt.map((malt, index) => (
                        <ul key={index}>{malt.name}</ul>
                    ))}
                </ul>
                <p><strong>Yeast:</strong> {beer.ingredients.yeast}</p>
            </div>
        </div>
    );
}

export default BeerProperties;
