import './Header.css';

const Header = ({ searchQuery,
    setSearchQuery,
    searchType,
    setSearchType,
    setShowFavorites,
    showFavorites
}) => {

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    
    const handleRadioChange = (e) => {
        setSearchType(e.target.value);
    };

    return (
        <div className="header-container">
            <div className="search-container">
                <input
                    className="search-bar"
                    type="text" placeholder="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <div className="search-options">
                    <label>
                        <input
                            type="radio"
                            name="searchType"
                            value="byName"
                            checked={searchType === 'byName'}
                            onChange={handleRadioChange}
                        />
                        by name
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="searchType"
                            value="byFoodPairing"
                            checked={searchType === 'byFoodPairing'}
                            onChange={handleRadioChange}
                        />
                        by food pairing
                    </label>
                </div>
            </div>
            <button className='show-favorites-button' onClick={() => setShowFavorites(!showFavorites)}>
                Show {showFavorites ? "All" : "Favorites"}
            </button>
        </div>
    );
}

export default Header;