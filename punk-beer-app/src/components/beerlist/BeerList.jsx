import { useEffect, useState } from 'react';
import './BeerList.css';
import PunkApiService from '../../services/PunkApiService';
import BeerCard from '../beercard/BeerCard';
import BeerDetails from '../beerdetails/BeerDetails';
import kegonly from '../../assets/kegonly.png';

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        PunkApiService.fetchBeers()
            .then(beers => {
                const updatedBeers = beers.map(beer => {
                    if (beer.image_url && beer.image_url.endsWith('keg.png')) {
                        return {
                            ...beer,
                            image_url: kegonly
                        };
                    }
                    return beer;
                });
                setBeers(updatedBeers);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <div className="loading">Cargando...</div>;
    }

    return (
        <>
            {selectedBeer ? (
                <BeerDetails beer={selectedBeer} onBack={() => setSelectedBeer(null)} />
            ) : (
                <div className="beer-list-container">
                    {beers.map(beer => (
                        <BeerCard key={beer.id} beer={beer} onSelectBeer={setSelectedBeer} />
                    ))}
                </div>
            )}
        </>

    );
}

export default BeerList;
