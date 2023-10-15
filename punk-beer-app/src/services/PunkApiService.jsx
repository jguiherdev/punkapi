const BASE_URL = 'https://api.punkapi.com/v2';

const PunkApiService = {
    fetchBeers: async () => {
        const response = await fetch(`${BASE_URL}/beers`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }
};

export default PunkApiService;
