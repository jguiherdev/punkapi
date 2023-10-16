const BASE_URL = 'https://api.punkapi.com/v2';

const PunkApiService = {
    fetchBeers: async (page = 1, perPage = 10, beerName = '', foodPairing = '') => {
        let url = `${BASE_URL}/beers?page=${page}&per_page=${perPage}`;
        
        if (beerName) {
            url += `&beer_name=${beerName}`;
        }

        if (foodPairing) {
            url += `&food=${foodPairing}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }
};

export default PunkApiService;
