import { useEffect, useState } from 'react';
import './BeerList.css';
import PunkApiService from '../../services/PunkApiService';
import BeerCard from '../beercard/BeerCard';
import BeerDetails from '../beerdetails/BeerDetails';
import kegonly from '../../assets/kegonly.png';

const BeerList = ({
    searchQuery,
    searchType,
    showFavorites,
    favorites,
    addToFavorites,
    removeFromFavorites
}) => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(true);
    const perPage = 10;

    useEffect(() => {
        PunkApiService.fetchBeers(
            currentPage,
            perPage,
            searchType === 'byName' ? searchQuery : '',
            searchType === 'byFoodPairing' ? searchQuery : ''
        )
            .then(fetchedBeers => {
                if (fetchedBeers.length < perPage && fetchedBeers.length !== 0) {
                    setHasMorePages(false);
                } else {
                    setHasMorePages(true);
                }

                const updatedBeers = fetchedBeers.map(beer => {
                    if ((beer.image_url && beer.image_url.endsWith('keg.png')) || beer.image_url === null) {
                        return {
                            ...beer,
                            image_url: kegonly
                        };
                    }
                    return beer;
                });

                setBeers(updatedBeers);

            })
            .catch(error => {
                console.log(error);
            });
            
    }, [currentPage, perPage, searchQuery, searchType]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <>
            {selectedBeer ? (
                <BeerDetails
                    beer={selectedBeer}
                    onBack={() => setSelectedBeer(null)}
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                />
            ) : (
                <div className="beer-list-container">
                    {(showFavorites ? favorites : beers).map(beer => (
                        <BeerCard key={beer.id} beer={beer} onSelectBeer={setSelectedBeer} />
                    ))}
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>←</button>
                        <button onClick={handleNextPage} disabled={!hasMorePages}>→</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default BeerList;
