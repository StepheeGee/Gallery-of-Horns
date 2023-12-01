import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import SelectedBeast from './components/SelectedBeast/SelectedBeast.jsx'; 

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [filterValue, setFilterValue] = useState('all');
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <Header title="Horned Beasts" handleFilterChange={handleFilterChange} />
      <Gallery setSelectedBeast={setSelectedBeast} filterValue={filterValue} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />}
      <Footer />
    </>
  );
}

export default App;
