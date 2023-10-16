import './App.css'
import BeerList from './components/beerlist/BeerList'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { useState } from 'react';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('byName');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);


  const addToFavorites = (beer) => {
    if (!favorites.find(fav => fav.id === beer.id)) { // Verifica que no esté ya en la lista
        setFavorites([...favorites, beer]);
    }
};

const removeFromFavorites = (beerId) => {
    setFavorites(favorites.filter(beer => beer.id !== beerId));
};


  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} showFavorites={showFavorites} setShowFavorites={setShowFavorites} />
      <BeerList searchQuery={searchQuery} searchType={searchType} favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} showFavorites={showFavorites}/>
      <Footer/>
    </>
  )
}

export default App
