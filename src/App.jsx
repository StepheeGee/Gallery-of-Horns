import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import SelectedBeast from './components/SelectedBeast/SelectedBeast.jsx'; 

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null); 

  return (
    <>
      <Header title="Horned Beasts" />
      <Gallery setSelectedBeast={setSelectedBeast} /> 
      {selectedBeast && <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />} 
      <Footer />
    </>
  );
}

export default App;