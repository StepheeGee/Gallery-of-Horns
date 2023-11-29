import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import imageData from '../../data/data.json';



function Gallery() {
  return (
    <div className="App">
      {imageData.map(item => (
        <HornedBeast
          key={item._id}
          imageUrl={item.image_url}
          title={item.title}
          description={item.description}
          keyword={item.keyword}
          horns={item.horns}
        />
      ))}
    </div>
  );
}

export default Gallery;
