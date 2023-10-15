import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <div className="search-options">
                    <label>
                        <input type="radio" name="searchType" value="byName" checked={true} />
                        by name
                    </label>
                    <label>
                        <input type="radio" name="searchType" value="byFoodPairing" />
                        by food pairing
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Header;